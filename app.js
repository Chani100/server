var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const apiRouter = require("./routes/api");

/* var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users"); */

var app = express();
app.use(cors());
app.use(
  logger(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);
/* app.use(logger("dev")); */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */
/* app.use("/admin", express.static(path.join(__dirname, "admin"))); */
/* app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.use("/", (req, res, next) => {
  console.log("headers", req.headers);
  res.status(404).json("error from server")
});
module.exports = app;
