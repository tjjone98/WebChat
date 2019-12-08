const router = require('express').Router();
const mustAuth = require('../middlewares/must-auth');
const roomModel = require('../models/room');
const userModel = require('../models/user');
const status = require('http-status');
const { query } = require('express-validator');
const reqValidate = require('../middlewares/validate-req');
const roomHelper = require('../utils/room');
const isObjectId = require('mongoose').Types.ObjectId.isValid;
const toObjectId = require('mongoose').Types.ObjectId;
// get list rooms
router.get('/', mustAuth, async (req, res) => {
	const user = req.user;
	const records = await roomModel
		.find({ members: user.id }, '-creator')
		.sort({ updatedAt: -1 })
		.populate('lastMessage')
		.populate('members', '-hashPassword -updatedAt -createdAt')
		.lean();
	return res.send(
		records.map(r => ({ ...r, ...roomHelper.getRoomAliasAndAvt(r, user.username) })),
	);
});
// get detail room
router.get('/info/:id', mustAuth, async (req, res) => {
	const { id } = req.params;
	const user = req.user;
	const room = await roomModel.findByIdAndUserId(id, user.id);
	if (!room) {
		return res.status(status.NOT_FOUND).send({ message: 'Không tìm thấy phòng ' });
	}
	res.send(await _getInfoByType(room.type, room.members, user.id, room.id));
});

function _getInfoByType(type, members, userId, roomId) {
	if (type === 'group') {
		return _getGroupRoomInfo(members, roomId);
	} else {
		return _getInboxRoomInfo(members, userId);
	}
}

async function _getGroupRoomInfo(memberIds) {
	const members = await Promise.all(memberIds.map(id => _getInfo(id)));
	const name = members.reduce((acc, member) => {
		return acc + ' ' + member.fullName;
	}, '');
	return {
		type: 'group',
		members,
		name,
	};
}

async function _getInboxRoomInfo(members, userId) {
	const friend = await _getFriendInfo(members, userId);
	if (!friend) return {};
	let name = friend.fullName;
	return {
		type: 'inbox',
		name,
		avatar: friend.avatar,
		frUsername: friend.username,
	};
}

function _getFriendInfo(members, userId) {
	const friendId = _getFriendId(members, userId);
	return _getInfo(friendId);
}

function _getFriendId(members, userId) {
	for (let member of members) {
		if (String(member) !== userId) return member;
	}
	return null;
}

function _getInfo(id) {
	return userModel.findById(id, 'username fullName avatar').lean();
}

// search room with text
router.get(
	'/search',
	mustAuth,
	[
		query('text')
			.isString()
			.isLength({ max: 100 }),
	],
	reqValidate,
	async (req, res) => {
		const user = req.user;
		const userId = user._id;
		const { text } = req.query;
		if (!text) return res.send([]);
		const records = await roomHelper.searchRoom(text, userId, user.username);
		return res.send(records);
	},
);
router.get('/user/:username', mustAuth, async (req, res) => {
	const room = await findOrCreateRoom(req.params.username, req.user._id);
	if (req.query.api) {
		return res.send(room);
	}
	res.redirect('/chat');
});

async function findOrCreateRoom(userName, myUserId) {
	const user = await userModel.findByUsername(userName).lean();
	if (!user) {
		return false;
	}
	const room = await roomModel.findByMembers([user._id, myUserId]);
	if (room) return room;
	return roomModel.create({
		members: [toObjectId(user._id), toObjectId(myUserId)],
		type: 'inbox',
		creator: toObjectId(myUserId),
	});
}

module.exports = router;
