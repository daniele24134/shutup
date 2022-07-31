import { io } from 'socket.io-client';
import { ChatType, UserType } from '../@types';
import { AppDispatch } from '../app/store';
import { addChat } from '../features/user/userSlice';
const server_url = process.env.REACT_APP_SERVER_URL || '';

export const socket = io(server_url);

export const socketInit = (user: UserType) => {
  return () => {
    socket.emit('join-currentID', user.id);

    socket.emit(
      'join-chats',
      user.chats?.map((c) => c.id)
    );
  };
};

export const joinChat = (chatId: string) => {
  socket.emit('join-chat', chatId);
};

export const sendChat = (chat: ChatType, userId: string) => {
  socket.emit('send-chat', chat, userId);
  socket.emit('join-chat', chat.id);
};

export const receiveChat = (dispatch: AppDispatch, chat: ChatType) => {
  console.log('receiving chat', chat.id);
  dispatch(addChat(chat));
  socket.emit('join-chat', chat.id);
};
