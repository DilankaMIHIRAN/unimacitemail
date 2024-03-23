const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

exports.postMail = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const contactNum = req.body.contact;
  const message = req.body.message;

  try {
    let response = await transporter.sendMail({
      to: "info@unimacit.com",
      from: email,
      subject: `Customer details - ${name}`,
      html: `<p>Name: ${name} <br> email: ${email} <br>Contact number: ${contactNum} <br>Message: ${message}</p>`,
    });

    if (response) {
      res.status(200).json({
        state: `Email sent Successfully to info@unimacit.com`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "Something went wrong.",
    });
  }
};
