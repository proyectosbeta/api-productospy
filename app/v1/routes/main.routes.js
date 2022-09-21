import express from 'express';
import mainController from '../../controllers/main.controller.js';

const mainRouter = express.Router();

mainRouter.get('/', mainController);

export default mainRouter;
