const express = require("express");
const cors = require("cors");

const app = express();

const mailRoute = require("./routes/mail.router");
const { json } = require("express/lib/response");

app.use(cors());
app.use(express.json());

app.get("/health", (rrq, res) => {
  res.send({ message: "health OK!" });
});

app.use(mailRoute);

app.listen(8000, () => {
  console.log("server listen to port 8000");
});
