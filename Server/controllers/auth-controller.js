const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req, res) =>{
    try {

    } catch(error) {
        console.log(error);
        res
        .status(200)
        .send("Welcome to world to router");
    }
};

const register = async(req , res) =>{
    try {
        console.log(req.body);
        const { name  , email , password } = req.body;

        const userExist = await User.findOne({ email });

        if(userExist){
            return res.status(400).json({msg:"User already exists"});
        }

        const userCreated = await User.create({ name  , email , password });

        res.status(200).json({ msg: "registration successfull" , token : await userCreated.generateToken(), userId: userCreated._id.toString(), });
    } catch (error) {
        res.status(500).json({msg:"page not found"});
    }
}

const login = async (req , res) => {
    try {
        const {email , password } = req.body;

        const userExist = await User.findOne({ email });
        if(!userExist){
            return res.status(400).json({message: " Invalid Crendentials"});
        }

        const user = await bcrypt.compare(password , userExist.password);

        if(user) {
            res.status(200).json({ msg: "login successful", token : await userExist.generateToken(), userId: userExist._id.toString(),});
        }
        else{
            res.status(400).json({ message : "Invalid email or Password" });
        }

    } catch (error) {
        res.status(500).json("internal server error");
    }
};

module.exports = { home, register, login };