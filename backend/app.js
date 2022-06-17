var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql2");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { equal } = require("assert");

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
app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "my-documents",
  password: "my-documents",
  database: "my-documents",
});

//Get documents from db
app.get("/getDocuments", function (req, res) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM documents`

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("resultat: " + result);
      res.send(result)
    });
  });
});

//Post document to db
app.post("/saveDocument", function (req, res) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let documentTitle = req.body.title;
    let documentContent = req.body.content;
    let sql = `INSERT INTO documents (title, content) VALUES ("${documentTitle}", "${documentContent}")`;
    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("resultat: " + result);
    });
  });
});

app.post("/updateDocument", function (req, res) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let documentId = req.body.id;
    let documentContent = req.body.content;
    let sql = `UPDATE documents SET content = '${documentContent}' WHERE documentId = ${documentId}`;
    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("resultat: " + result);
    });
  });

});

//User login
app.post("/authorization", function (req, res) {
  //Create mock user
  let username = "username";
  let password = "password";

  //Check if entered user credentials are the same as mock user
  if (req.body.username == username && req.body.password == password) {
    res.cookie("userId", "12345");
    return res.send("Hellllooooo");
  }
  res.status("401");
  res.send("Invalid logon credentials");
});

module.exports = app;
