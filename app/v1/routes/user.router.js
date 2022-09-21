import { Router } from 'express';
import { getUsers, login, register } from '../../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/users/register', register);
userRouter.post('/users/login', login);
userRouter.get('/users', getUsers);

export default userRouter;
