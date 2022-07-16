import { Router } from 'express';
const router = Router();

import userController from './controllers/users_controller';

// users
router.get('./users/:id', userController.getUser);
