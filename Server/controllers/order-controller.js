const Order = require("../models/order-model")
// const bcrypt = require("bcryptjs");


const order = async(req , res) =>{
    try {
        console.log(req.body);
        const { firstName, lastName, email , address, address2, country, state, zip, ccfname ,ccnumber ,ccexpiration ,cccvv } = req.body;


        const orderCreated = await Order.create({ firstName, lastName, email , address, address2, country, state, zip, ccfname ,ccnumber ,ccexpiration ,cccvv });

        res.status(200).json({ msg: "registration successfull" ,orderId: orderCreated._id.toString(), });
    } catch (error) {
        res.status(500).json({msg:"page not found"});
    }
}


module.exports = {order};