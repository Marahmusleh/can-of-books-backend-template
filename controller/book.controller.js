'use strict';

const userModel = require('../models/user.model');

const getbooks = (request, response) => {

    const { email } = request.query;

    userModel.find({ email: email }, (error, user) => { // find the user data that matches email in the userModel collection
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

module.exports = getbooks;