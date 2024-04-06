const express = require("express");
const router = express.Router();
const ordercontroller = require("../controllers/order-controller");


// router.get( "/", (req, res) => {
//     res.status(200)
//     .send("Welcome to world to router");
// });

// router.route("/").get(authcontrollers.home);

// router.route('/register').post(authcontrollers.register); 

router.route('/order').post(ordercontroller.order);

module.exports =  router;
