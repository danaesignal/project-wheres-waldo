"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _score = _interopRequireDefault(require("./routes/score.route"));

var _target = _interopRequireDefault(require("./routes/target.route"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

_dotenv["default"].config(); // Mongoose for MongoDB connection


var mongoDB = process.env.DATABASE_URL;

_mongoose["default"].connect(mongoDB);

_mongoose["default"].Promise = global.Promise;
var db = _mongoose["default"].connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // Real basic landing page

app.get('/', function (req, res) {
  return res.status(200).send('Okay');
}); // Routers for Score and Target end points

app.use('/score', _score["default"]);
app.use('/target', _target["default"]);
app.listen(4500);
console.log('API running on port 4500.');