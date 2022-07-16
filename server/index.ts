import { PrismaClient } from '@prisma/client';
import express from 'express';
import 'dotenv/config';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let server;
async function main() {
  server = app.listen(PORT, () => {
    console.log(`Server is listening at: http://localhost:${PORT}`);
  });
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
