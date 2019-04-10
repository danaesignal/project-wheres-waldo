import express from 'express';
import scoreController from '../controllers/score.controller';
let router = express.Router();

router.get('/test', scoreController.test);
router.post('/add', scoreController.addScore);
router.get('/:id', scoreController.getScore);
router.get('/', scoreController.getAllScores);

export default router;