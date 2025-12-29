const userHandler = require("../handler/userHandler")
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */



function getAllUser(req, res) {
    var data = userHandler.fetchAllUsers();

    res.json(data)

}

function getUserById(req, res) {
    var id = req.params.id;
    var data = userHandler.getUserById(id);

    if (data) {
        return res.json(data)
    } else {
        res.status(404).json({ message: 'User not found' });
    }


}

module.exports = { getUserById, getAllUser };
