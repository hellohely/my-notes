var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql2");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//Connect to mysql db
// app.locals.con = mysql.createConnection({
//     host: "",
//     port: "",
//     user: "",
//     password: "",
//     database: "",
// })

//User login
app.post("/authorization", function (req, res) {
  //Create mock user
  let username = "username";
  let password = "password";

  //Check if entered user credentials are the same as mock user
  if (req.body.username == username && req.body.password == password) {
    return res.cookie("userId", "12345");
  }

  res.status("401");
  res.send("Invalid logon credentials");
});

module.exports = app;
