import express from 'express';
const router = express.Router();

import exampleController from '../controllers/exampleController.js';
import { catchAsyncErrors } from '../middlewares/errors.js';
import authenticate from '../middlewares/authenticate.js';

//GET
router.get('/', catchAsyncErrors(exampleController.findAll));
router.get('/:slug', catchAsyncErrors(exampleController.findOne));

//POST + authenticate
router.post('/', authenticate, catchAsyncErrors(exampleController.create));

//PUT

//DELETE

export default router;
