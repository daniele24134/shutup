import { Socket } from 'socket.io';
import { prisma } from '..';
import { MessageType, ChatType } from '../types/@types';

export default function (socket: Socket) {
  socket.on('join-chats', (chatIds) => {
    chatIds.forEach((id: string) => {
      socket.join(id);
    });
  });

  socket.on('join-currentID', (userID: string) => {
    console.log('join id', userID);
    socket.join(userID);
  });

  socket.on('join-chat', (chatId) => {
    socket.join(chatId);
    console.log('join chat');
  });

  socket.on('send-chat', (chat, userId) => {
    console.log('send chat', userId);
    socket.broadcast.to(userId).emit('receive-chat', chat);
  });

  socket.on('save-message', async (data: MessageType) => {
    try {
      const { content, chatId, authorId }: MessageType = data;
      const message = await prisma.message.create({
        data: {
          chatId,
          authorId,
          content,
        },
      });
      socket.broadcast.to(chatId).emit('send-message', message);
    } catch (error: any) {
      console.error(error.message);
    }
  });

  // socket.on('create-chat', async (data: ChatType) => {
  //   try {
  //     const { ids }: ChatType = data;
  //     const userIds = ids.map((id) => {
  //       return { id };
  //     });
  //     const chat = await prisma.chat.create({
  //       data: {
  //         users: {
  //           connect: userIds,
  //         },
  //       },
  //     });
  //   } catch (error: any) {
  //     console.error(error.message);
  //   }
  // });

  socket.on('disconnection', () => {
    console.log('socket disconnected');
  });
}
