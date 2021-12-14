import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import commentController from '../controllers/commentController.js';

//GET
router.get('/:title', commentController.find);

//POST
router.post('/', catchAsyncErrors(commentController.create));

export default router;
