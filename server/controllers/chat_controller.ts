import { Request, Response } from 'express';
import prisma from '..';

const createChat = async (req: Request, res: Response) => {
  try {
    const { ids }: { ids: number[] } = req.body;
    const userIds = ids.map((id) => {
      return { id: +id };
    });
    const chat = await prisma.chat.create({
      data: {
        users: {
          connect: userIds,
        },
      },
    });
    res.send(chat);
  } catch (error: any) {
    console.error(error.message);
  }
};

const addUsersToChat = async (req: Request, res: Response) => {
  try {
    const { ids }: { ids: number[] } = req.body;
    const userIds = ids.map((id) => {
      return { id: +id };
    });
    const { id } = req.params;
    const chat = await prisma.chat.update({
      data: {
        users: {
          connect: userIds,
        },
      },
      where: {
        id: +id,
      },
    });
    res.send(chat);
  } catch (error: any) {
    console.error(error.message);
  }
};

const deleteUsersToChat = async (req: Request, res: Response) => {
  try {
    const { ids }: { ids: number[] } = req.body;
    const userIds = ids.map((id) => {
      return { id: +id };
    });
    const { id } = req.params;
    const chat = await prisma.chat.update({
      data: {
        users: {
          disconnect: userIds,
        },
      },
      where: {
        id: +id,
      },
    });
    res.send(chat);
  } catch (error: any) {
    console.error(error.message);
  }
};

const deleteChat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chat = await prisma.chat.delete({
      where: {
        id: +id,
      },
    });
    res.send(chat);
  } catch (error: any) {
    console.error(error.message);
  }
};

export default { createChat, addUsersToChat, deleteUsersToChat, deleteChat };
