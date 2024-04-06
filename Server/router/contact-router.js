// const express = require("express");
// const router = express.Router();
// const contactForm = require("../controllers/contact-controller");

// router.route("/contact").post(contactForm);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { contactForm } = require('../controllers/contact-controller');

// Define the POST route for the contact form
router.post('/contact', contactForm);

module.exports = router;
