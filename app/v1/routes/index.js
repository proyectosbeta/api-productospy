import express from 'express';
import mainRouter from './main.routes.js';

const router = express.Router();

router.use(mainRouter);

export default router;
