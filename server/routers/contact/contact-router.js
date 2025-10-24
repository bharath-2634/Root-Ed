const express = require('express');
const { submitContact } = require('../../controllers/contact/contact-controller');

const router = express.Router();

// Public route - submit contact form and send email
router.post('/submit', submitContact);

module.exports = router;
