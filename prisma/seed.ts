import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.game.create({
  //   data: {
  //     name: "game-1",
  //   },
  // });
  // await prisma.game.create({
  //   data: {
  //     name: "game-2",
  //   },
  // });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });
