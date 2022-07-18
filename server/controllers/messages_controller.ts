import { Request, Response } from 'express';
import prisma from '..';

type MessageType = {
  chatId: number;
  content: string;
  authorId: number;
};

const createMessage = async (req: Request, res: Response) => {
  try {
    const { content, chatId, authorId }: MessageType = req.body;
    const message = await prisma.message.create({
      data: {
        chatId,
        authorId,
        content,
      },
    });
    res.send(message);
  } catch (error: any) {
    console.error(error.message);
  }
};

const updateMessage = async (req: Request, res: Response) => {
  try {
    const { content }: MessageType = req.body;
    const { id } = req.params;
    const message = await prisma.message.update({
      data: {
        content,
      },
      where: {
        id: +id,
      },
    });
    res.send(message);
  } catch (error: any) {
    console.error(error.message);
  }
};

const deleteMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = await prisma.message.delete({
      where: {
        id: +id,
      },
    });
    res.send(message);
  } catch (error: any) {
    console.error(error.message);
  }
};

export default { createMessage, updateMessage, deleteMessage };
