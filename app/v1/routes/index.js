import express from 'express';
import mainRouter from './main.router.js';
import userRouter from './user.router.js';

const router = express.Router();

router.use(mainRouter);
router.use(userRouter);

export { router };
