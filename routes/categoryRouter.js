import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import categoryController from '../controllers/categoryController.js';

//GET
router.get('/', categoryController.findAll);
router.get('/:id', categoryController.find);

//POST
router.post('/', catchAsyncErrors(categoryController.create));

//PUT
router.put('/:id', catchAsyncErrors(categoryController.update));

export default router;
