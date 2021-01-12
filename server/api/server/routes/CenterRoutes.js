import { Router } from 'express';
import CenterController from '../controllers/CenterController';

const router = Router();

router.get('/', CenterController.getAllCenters);
router.post('/', CenterController.addCenter);
router.get('/:id', CenterController.getACenter);
router.put('/:id', CenterController.updatedCenter);
router.delete('/:id', CenterController.deleteCenter);

export default router;