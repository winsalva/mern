const { user, Sequelize } = require("./../models");
const Op = Sequelize.Op;
let self = {};

/**
 * @description Get All Users
 * @type GET
 * @path /api/users
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
self.getAllUsers = async (req, res) => {
    try {
	let data = await user.findAll({});
	return res.status(200).json({
	    success: true,
	    count: data.length,
	    data: data
	});
    }
    catch(error) {
	return res.status(500).json({
	    success: false,
	    error: error
	})
    }
};

/**
 * @description Create New User
 * @type POST
 * @path /api/users/new
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
self.createUser = async (req, res) => {
    if(!req.body.userName || !req.body.email || !req.body.password) {
	return res.status(400).send({
	    success: false,
	    message: "Content cannot be empty!"
	});
    }

    try {
	const newUser = {
	    userName: req.body.userName,
	    email: req.body.email,
	    password: req.body.password
	};
	let data = await user.create(newUser);

	return res.status(201).json({
	    success: true,
	    data: data
	})
    }
    catch(error) {
	return res.status(500).json({
	    success: false,
	    error: error
	});
    }
};

/**
 * @description Get User By ID
 * @type GET
 * @path /api/users/:id
 * @param {*} req
 * @param {*} res
 * @returns {Number} - id - user id
 */
self.getUserById = async (req, res) => {
    try {
	let id = req.params.id;
	let data = await user.findByPk(id);

	if(data) {
	    return res.status(200).json({
		success: true,
		data: data
	    });
	}
	else {
	    return res.status(400).json({
		success: false,
		error: "No such user present.",
		data: []
	    });
	}
    }
    catch(error) {
	return res.status(500).json({
	    success: false,
	    error: error
	});
    }	    
};

/**
 * @description Update User data
 * @type PUT
 * @path /api/users/:id
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
self.updateUser = async (req, res) => {
    try {
	let id = req.params.id;
	let body = req.body;

	let data = await user.update(body, {
	    where: {
		id: id
	    }
	});

	if(data[0] === 0) {
	    return res.status(200).json({
		success: false,
		error: "No user found with this id."
	    });
	}
	return res.status(200).json({
	    success: true,
	    "number of rows changed": data
	});
    }
    catch(error) {
	return res.status(500).json({
	    success: false,
	    error: error
	})
    }
};

/**
 * @description Delete User By User ID
 * @type DELETE
 * @path /api/users/:id
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
self.deleteUser = async (req, res) => {
    try {
	let id = req.params.id;
	let data = await user.destroy({
	    where: {
		id: id
	    }
	});
	if(data === 1) {
	    return res.status(200).json({
		success: true,
		message: `User with id ${id} deleted`
	    });
	}
	return res.status(200).json({
	    success: false,
	    message: `User with id ${id} not found`
	});
    }
    catch(error) {
	return res.status(500).json({
	    success: false,
	    error: error
	});
    }
};

/**
 * @description Delete All Users
 * @type DELETE
 * @path /api/users/
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
self.deleteAllUsers = async (req, res) => {
    try {
	let data = await user.destroy({
	    where: {},
	    truncate: true
	});
	return res.status(200).json({
	    success: true,
	    data: data
	});
    }
    catch(error) {
	return res.status(500).json({
	    success: false,
	    error: error
	});
    }
};

module.exports = self;
