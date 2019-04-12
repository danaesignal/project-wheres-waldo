import Score from '../models/score.model.js';
import { body, validationResult } from 'express-validator/check';

let ScoreController = {}

ScoreController.test = (req, res) => {
  return res.send('ScoreController');
};

ScoreController.validate = (method) => {
  switch (method) {
    case 'addScore':
      return [
        body('name').trim().escape(),
        body('time', 'Time must be numeric (in seconds)').isNumeric().trim().escape()
      ]
  }
};

ScoreController.addScore = (req, res, next) => {
  const name = req.body.name;
  const time = req.body.time;
  let score = new Score(
    {
      name: name || 'anonymous',
      time: time
    }
  );
  const errors = validationResult(req);

  score.save(function (err) {
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
    if (err) return next(err);
    res.send('Score recorded');
  })
};

ScoreController.getScore = (req, res, next) => {
  Score.findById(req.params.id, (err, score) => {
    if (err) return next(err);
    res.send(score);
  })
}

ScoreController.getAllScores = (req, res, next) => {
  Score.find({}, (err, scores) => {
    if (err) return next(err);
    res.send(scores);
  })
};

export default ScoreController;