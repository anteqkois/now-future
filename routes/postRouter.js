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

//DELETE
router.delete(
    '/:id/comments/:idComment',
    catchAsyncErrors(postController.deleteComment),
    catchAsyncErrors(commentController.remove),
);

export default router;
