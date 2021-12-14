import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import authController from '../controllers/authController.js';

//GET
router.get('/logout', authController.logout);

//POST
router.post('/login', catchAsyncErrors(authController.login));
router.post(
  '/signup',
  catchAsyncErrors(authController.signup),
  catchAsyncErrors(authController.login),
);

// na później
// router.post('/refresh', catchAsyncErrors(authController.refreshToken));

export default router;
