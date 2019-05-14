import express from 'express';
import scoreController from '../controllers/score.controller';


let router = express.Router();

router.get('/test', scoreController.test);
router.post('/add', scoreController.validate('addScore'), scoreController.addScore);
router.get('/:id', scoreController.getScore);
router.get('/', scoreController.getAllScores);
router.patch('/:id', scoreController.validate('updateName'), scoreController.updateName);

export default router;