import { PrismaClient } from '@prisma/client';
import express from 'express';
import 'dotenv/config';
import router from './router';
import sockets from './controllers';

const app = express();
const server = require('http').createServer(app);
import { Server } from 'socket.io';
const io = new Server(server, { cors: { origin: '*' } });

const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(router);

async function main() {
  server.listen(PORT, () => {
    console.log(`Server is listening at: http://localhost:${PORT}`);
  });

  io.on('connection', sockets);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { prisma, io };
