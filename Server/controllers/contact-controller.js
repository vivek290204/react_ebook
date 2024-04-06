const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        console.log(req.body);
        const { fullname, email, message } = req.body;

        const contactCreated = await Contact.create({ fullname, email, message });

        res.status(200).json({ msg: "Contact form submitted successfully", contactId: contactCreated._id.toString() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed to submit contact form" });
    }
};

module.exports = { contactForm };
