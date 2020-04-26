"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var userController = {
    showUser: function (req, res) {
        user_1.user.find(function (err, userData) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ data: userData });
            }
        });
    },
    addUser: function (req, res) {
        var userr = {
            name: req.body.name,
            address: req.body.address
        };
        var usr = new user_1.user(userr);
        usr.save(function (err, data) {
            res.json({ dataa: data });
        });
    },
    updateUser: function (req, res) {
        var upUser = {
            name: req.body.name,
            address: req.body.address
        };
        user_1.user.updateOne({ "_id": req.body.id }, { $set: upUser }, function (err, upData) {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ msg: upData });
            }
        });
    },
    deleteUser: function (req, res) {
        user_1.user.findOneAndDelete({ "_id": req.params.id }, function (err, data) {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ msg: "user Deleted" });
            }
        });
    }
};
exports.users = userController;
