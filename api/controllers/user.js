const User = require("../models/User");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({})
        })
};

exports.login = (req, res, next) => {

};