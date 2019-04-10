import Score from '../models/score.model.js';

let ScoreController = {}

ScoreController.test = (req, res) => {
  return res.send('ScoreController');
};

ScoreController.addScore = (req, res) => {
  let score = new Score(
    {
      name: req.body.name || 'anonymous',
      time: req.body.time
    }
  );

  score.save(function (err) {
    if (err) return next(err);
    res.send('Score recorded');
  })
};

ScoreController.getScore = (req, res) => {
  Score.findById(req.params.id, (err, score) => {
    if (err) return next(err);
    res.send(score);
  })
}

ScoreController.getAllScores = (req, res) => {
  Score.find({}, (err, scores) => {
    if (err) return next(err);
    res.send(scores);
  })
};

export default ScoreController;