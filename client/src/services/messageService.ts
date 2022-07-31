const server_url = process.env.REACT_APP_SERVER_URL || '';
import { io } from 'socket.io-client';
const socket = io(server_url);
import { MessageType } from '../@types';

export const sendMessage = async (message: MessageType) => {
  socket.emit('save-message', message);
};
