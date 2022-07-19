import { Socket } from 'socket.io';
import { io } from '..';

export default function (socket: Socket) {
  socket.on('save-message', (data) => {});
  socket.emit('send-message', () => {});

  socket.on('create-chat', () => {});
  socket.emit('new-chat', () => {});

  socket.on('disconnection', () => {
    console.log('socket disconnected');
  });
}
