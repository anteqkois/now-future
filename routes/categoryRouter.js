import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import categoryController from '../controllers/categoryController.js';

//GET
router.get('/', categoryController.findAll);
router.get('/:id', catchAsyncErrors(categoryController.find));

//POST
router.post('/', catchAsyncErrors(categoryController.create));

//PUT
router.put('/:id', catchAsyncErrors(categoryController.update));

//DELETE
router.delete('/:id', catchAsyncErrors(categoryController.remove));

export default router;
