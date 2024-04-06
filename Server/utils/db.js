const mongoose = require("mongoose");

// const URI = "mongodb+srv://ebook:ebook@cluster0.qwfgbqt.mongodb.net/ebook_store"
// "mongodb+srv://ebook:ebook@cluster0.qwfgbqt.mongodb.net/ebook_store?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MONGODB_URI
// mongoose.connect(URI);

const connectDb = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("MongoDB Connected...")
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;