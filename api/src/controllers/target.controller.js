import Target from '../models/target.model.js';
import dotenv from 'dotenv';
import { Base64 } from 'js-base64'

dotenv.config();

let TargetController = {}

// Basic test
TargetController.test = (req, res) => {
  return res.send('TargetController');
};

TargetController.authenticate = (req, res, next) => {
  let authentication = `Basic ${Base64.encode(process.env.API_KEY)}`;
  try {
    if(req.headers.authorization === authentication){
      next();
    } else {
      res.status(511).json({ errors: "Valid API Key required" });
    }
  } catch (e) {
    res.send(e)
  }
}

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

// Create
TargetController.loadTarget = (req, res, next) => {
  let target = new Target(
    {
      name: req.body.name,
      topLeft: req.body.topLeft,
      topRight: req.body.topRight,
      bottomLeft: req.body.bottomLeft,
      bottomRight: req.body.bottomRight,
    }
  );
  target.save(function (err) {
    if (err) return next(err);
    res.send('Target loaded.');
  })
};

export default TargetController;