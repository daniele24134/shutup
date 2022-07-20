import { Socket } from 'socket.io';
import { prisma } from '..';
import { MessageType, ChatType } from '../types/@types';

export default function (socket: Socket) {
  socket.on('join-room', (chatId) => {
    socket.join(chatId);
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
      socket.to(chatId).emit('send-message', message);
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
