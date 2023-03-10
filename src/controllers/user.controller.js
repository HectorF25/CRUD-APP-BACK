const User = require("../models/user.model.js");
const response = require("../config/response.js");
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll().then((user) => {
        const usersFind = user.map((user) => {
            return {
                id: user.idUser,
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                stateUser: user.stateUser,
                token: user.token,
                identification: user.identification
            }
        });
        response(res, 200, 'success', usersFind);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};
// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a User
    User.create(req.body).then((user) => {
        const createdUser = {
            user: {
                id: user.idUser,
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                stateUser: user.stateUser,
                token: user.token,
                identification: user.identification
            }
        }
        response(res, 200, 'success', createdUser);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Update an existing User
exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const id = req.params.userId;
    User.update(req.body, {
        where: { idUser: id },
    }).then((user) => {
        if (user == 1) {
            User.findOne({ where: { idUser: id } }).then((userf) => {
                const userUpdated = {
                    user: {
                        id: userf.idUser,
                        first_name: userf.first_name,
                        last_name: userf.last_name,
                        username: userf.username,
                        stateUser: userf.stateUser,
                        token: userf.token,
                        identification: userf.identification
                    }
                }
                return userUpdated;
            }).then((userUpdated) => {
                response(res, 200, 'User was updated successfully.', userUpdated);
            });
            //
        } else {
            response(res, 404, 'error', `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`);
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating User with id=" + id + " " + err
        });
    });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};

// Inactive an existing User
exports.inactive = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const id = req.params.userId;
    User.update({ stateUser: false }, {
        where: { idUser: id },
    }).then((user) => {
        if (user == 1) {
            User.findOne({ where: { idUser: id } }).then((userf) => {
                const userUpdated = {
                    user: {
                        id: userf.idUser,
                        first_name: userf.first_name,
                        last_name: userf.last_name,
                        username: userf.username,
                        stateUser: userf.stateUser,
                        token: userf.token,
                        identification: userf.identification
                    }
                }
                return userUpdated;
            }).then((userUpdated) => {
                response(res, 200, 'User was inactivated successfully.', userUpdated);
            });
            //
        } else {
            response(res, 404, 'error', `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`);
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating User with id=" + id + " " + err
        });
    });
};

// Active an existing User
exports.active = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const id = req.params.userId;
    User.update({ stateUser: true }, {
        where: { idUser: id },
    }).then((user) => {
        if (user == 1) {
            User.findOne({ where: { idUser: id } }).then((userf) => {
                const userUpdated = {
                    user: {
                        id: userf.idUser,
                        first_name: userf.first_name,
                        last_name: userf.last_name,
                        username: userf.username,
                        stateUser: userf.stateUser,
                        token: userf.token,
                        identification: userf.identification
                    }
                }
                return userUpdated;
            }).then((userUpdated) => {
                response(res, 200, 'User was activated successfully.', userUpdated);
            });
        } else {
            response(res, 404, 'error', `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`);
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating User with id=" + id + " " + err
        });
    });
};