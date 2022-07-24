import { io } from 'socket.io-client';
import { MessageType } from '../@types';
const server_url = process.env.REACT_APP_SERVER_URL || '';
const socket = io(server_url);

export const sendMessage = async (message: MessageType) => {
  socket.emit('save-message', message);
};
