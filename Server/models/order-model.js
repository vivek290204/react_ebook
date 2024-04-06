const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

const orderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    address2: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    zip: {
        type: String,
        require: true,
    },
    ccfname: {
        type: String,
        require: true,
    },
    ccnumber: {
        type: String,
        require: true,
    },
    ccexpiration: {
        type: String,
        require: true,
    },
    cccvv: {
        type: String,
        require: true,
    },
});

// userSchema.pre("save", async function(next) {
//     // console.log("pre method", this);
//     const user = this ;
//     if (!user.isModified("password")){
//         next();
//     }

//     try {
//         const saltRound = await bcrypt.genSalt(10);
//         const hash_password = await bcrypt.hash(user.password ,saltRound);
//         user.password = hash_password;
//     } catch (error) {
//         next(error);
//     }
// });

// userSchema.methods.generateToken = async function () {
//     try {
//         return jwt.sign(
//         {
//             userId: this._id.toString(),
//             email: this.email,
//             isAdmin: this.isAdmin,
//         },
//         process.env.JWT_SECRECT_KEY,
//         {
//             expiresIn: "100d",
//         }
//       );
//     } catch (error) {
//         console.error(error);
//     }
// };

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;