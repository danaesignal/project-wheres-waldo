import Target from '../models/target.model.js';

let TargetController = {}

// Basic test
TargetController.test = (req, res) => {
  return res.send('TargetController');
};

// Read
TargetController.getTarget = (req, res) => {
  Target.find({name: req.params.name}, (err, target) => {
    if (err) return next(err);
    res.send(target);
  })
}

// Read (all)
TargetController.getAllTargets = (req, res) => {
  Target.find({}, (err, targets) => {
    if (err) return next(err);
    res.send(targets);
  })
};

export default TargetController;