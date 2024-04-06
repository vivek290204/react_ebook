const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller")


// router.get( "/", (req, res) => {
//     res.status(200)
//     .send("Welcome to world to router");
// });

router.route("/").get(authcontrollers.home);

router.route('/register').post(authcontrollers.register); 

router.route('/login').post(authcontrollers.login);

module.exports =  router;
