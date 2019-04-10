import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Score from './routes/score.route';
import Target from './routes/target.route';

const app = express();
dotenv.config();

let mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  return res.status(200).send('Okay');
})

app.use('/score', Score);
app.use('/target', Target);

app.listen(4500)

console.log('API running on port 4500.');