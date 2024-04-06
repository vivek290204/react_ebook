const { Schema, model } = require("mongoose");

const contactSchema = new Schema( {
    fullname : {type: String, required: true},
    email : {type: String, required: true},
    message : {type: String, required: true}, 
});

const Contact = new model("Contact", contactSchema);
module.exprots = Contact;
