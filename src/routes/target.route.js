import express from 'express';
import targetController from '../controllers/target.controller';
let router = express.Router();

router.get('/test', targetController.test);
router.get('/:name', targetController.getTarget);
router.post('/load', targetController.authenticate, targetController.loadTarget);
router.get('/', targetController.getAllTargets);

export default router;