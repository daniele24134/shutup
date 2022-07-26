import { Request, Response } from 'express';
import { prisma } from '..';

const getAllChats = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chats = await prisma.user.findMany({
      where: {
        id,
      },
      select: {
        chats: true,
      },
    });
    res.send(chats);
  } catch (error: any) {
    console.error(error.message);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findMany({
      where: {
        id,
      },
      include: {
        chats: {
          include: {
            users: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });
    res.send(user);
  } catch (error: any) {
    console.error(error.message);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
      include: {
        chats: true,
      },
    });
    res.send(user);
  } catch (error: any) {
    console.error(error.message);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { id } = req.params;
    const user = await prisma.user.update({
      where: { id },
      data: userData,
      include: {
        chats: true,
      },
    });
    res.send(user);
  } catch (error: any) {
    console.error(error.message);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({ where: { id } });
    res.send(user);
  } catch (error: any) {
    console.error(error.message);
  }
};

const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        username: true,
        id: true,
      },
    });
    res.send(user);
  } catch (error: any) {
    console.error(error.message);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        chats: {
          include: {
            users: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });
    if (user?.password === password) {
      res.send(user);
    } else {
      throw new Error('wrong credentials');
    }
  } catch (error: any) {
    res.status(400).send(error.message);
    console.error(error.message);
  }
};

export default {
  getAllChats,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByUsername,
  login,
};
