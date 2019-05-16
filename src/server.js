import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Score from './routes/score.route';
import Target from './routes/target.route';
import cors from 'cors'

const path = require("path")
const app = express();
const port = process.env.PORT || 4500;

app.use(cors());

dotenv.config();

// Mongoose for MongoDB connection
let mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routers for Score and Target end points
app.use('/score', Score);
app.use('/target', Target);

// // Facilitates React client
// app.use(express.static(path.join(__dirname, "../client", "build")))
//
// // Serves React client
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
// });

app.listen(port)

console.log(`Server running on port ${port}.`);