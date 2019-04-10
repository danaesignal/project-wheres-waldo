import Target from '../models/target.model.js';

let TargetController = {}

TargetController.test = (req, res) => {
  return res.send('TargetController');
};

TargetController.getTarget = (req, res) => {
  Target.find({name: req.params.name}, (err, target) => {
    if (err) return next(err);
    res.send(target);
  })
}

TargetController.getAllTargets = (req, res) => {
  Target.find({}, (err, targets) => {
    if (err) return next(err);
    res.send(targets);
  })
};

export default TargetController;