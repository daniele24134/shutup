import { Router } from 'express';
const router = Router();

import usersController from './controllers/users_controller';
import messagesController from './controllers/messages_controller';
import chatsController from './controllers/chat_controller';

// users
router.get('/users/:id', usersController.getUser);
router.get('/users/username/:username', usersController.getUserByUsername);
router.post('/users', usersController.createUser);
router.post('/users/login', usersController.login);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// messages
router.post('/messages', messagesController.createMessage);
router.put('/messages/:id', messagesController.updateMessage);
router.delete('/messages/:id', messagesController.deleteMessage);

// chats
router.post('/chats', chatsController.createChat);
router.put('/chats/add/:id', chatsController.addUsersToChat);
router.put('/chats/remove/:id', chatsController.deleteUsersToChat);
router.delete('/chats/:id', chatsController.deleteChat);
router.get('/chats/:id', chatsController.getChat);

export default router;
