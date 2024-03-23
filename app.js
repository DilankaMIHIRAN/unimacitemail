const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const mailRoute = require("./routes/mail.router");
const { json } = require("express/lib/response");

app.use(mailRoute);

app.get("/", (rrq, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

app.listen(8000, () => {
  console.log("server listen to port 8000");
});
