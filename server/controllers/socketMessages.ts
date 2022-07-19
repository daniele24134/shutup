import { Socket } from 'socket.io';
import { prisma } from '..';

type MessageType = {
  chatId: number;
  content: string;
  authorId: number;
};
const createMessage = async (data: MessageType) => {
  try {
    const { content, chatId, authorId }: MessageType = data;
    const message = await prisma.message.create({
      data: {
        chatId,
        authorId,
        content,
      },
    });
  } catch (error: any) {
    console.error(error.message);
  }
};
