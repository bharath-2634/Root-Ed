const express = require('express');
const { sendFAQMail } = require('../../controllers/mail/mail-controller.js');

const router = express.Router();

router.post("/send-faq-mail", sendFAQMail);

module.exports = router;
