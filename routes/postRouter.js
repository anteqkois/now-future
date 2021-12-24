import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import postController from '../controllers/postController.js';
import commentController from '../controllers/commentController.js';

//GET
router.get('/', postController.findAll);
router.get('/:category', postController.find);
// router.get('/user/:user', postController.findUser);

//POST
router.post('/', catchAsyncErrors(postController.create));
router.post(
    '/:id/comments',
    catchAsyncErrors(commentController.create),
    catchAsyncErrors(postController.addComment),
);
router.post('/:id/stars', catchAsyncErrors(postController.addStar));
router.post('/:id/categories', catchAsyncErrors(postController.addCategory));

//PUT
router.put('/:id', catchAsyncErrors(postController.update));

//DELETE
router.delete('/:id', catchAsyncErrors(postController.remove));
router.delete(
    '/:id/comments/:idComment',
    catchAsyncErrors(postController.removeComment),
    catchAsyncErrors(commentController.remove),
);
router.delete('/:id/stars/:idUser', catchAsyncErrors(postController.removeStar));
router.delete('/:id/categories/:idCategory', catchAsyncErrors(postController.removeCategory));

export default router;
