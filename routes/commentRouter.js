import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import commentController from '../controllers/commentController.js';

//GET
router.get('/:id', commentController.find);
router.get('/', commentController.findAll);

//POST Brak - Nie powinno być możłiwości dodawania komentarza o tak sobie 
router.post('/:id/stars', catchAsyncErrors(commentController.addStar));

//PUT
router.put('/:id', catchAsyncErrors(commentController.update));

//DELETE
router.delete('/:id/stars/:idUser', catchAsyncErrors(commentController.removeStar));

export default router;
