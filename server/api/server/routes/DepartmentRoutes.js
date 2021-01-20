import { Router } from 'express';
import DepartmentController from '../controllers/DepartmentController';

const router = Router();

router.get('/', DepartmentController.getAllDepartments);
router.post('/', DepartmentController.addDepartment);
router.get('/:id', DepartmentController.getADepartment);
router.put('/:id', DepartmentController.updatedDepartment);
router.delete('/:id', DepartmentController.deleteDepartment);

export default router;