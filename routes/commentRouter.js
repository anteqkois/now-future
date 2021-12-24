import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import commentController from '../controllers/commentController.js';

//GET
router.get('/:id', commentController.find);
router.get('/', commentController.findAll);

//POST
router.post('/', catchAsyncErrors(commentController.create));

//PUT
router.put('/:id', catchAsyncErrors(commentController.update));

export default router;
