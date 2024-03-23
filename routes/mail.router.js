const express = require("express");
const mailController = require("../controllers/mail.controller");

const router = express.Router();

router.post("/mail", mailController.postMail);

module.exports = router;
