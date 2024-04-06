require("dotenv").config();
const express = require("express");
const cors  = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-router");
const connectDb = require("./utils/db");
const { connect } = require("mongoose");
const errorMiddleware = require("./middlewares/error-middlewares");

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET , POST , PUT , DELETE , PATCH, HEAD",
    credentials :true , 
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/abcd", orderRoute);


app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to world");
});

app.get("/register", (req, res) => {
    res.status(200).send("Welcome ti world");
});

const PORT = 3305;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running in port  ${PORT}`);
    });
});

