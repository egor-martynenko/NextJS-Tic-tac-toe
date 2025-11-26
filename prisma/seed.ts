import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: { login: "myFirst User", passwordHash: "asdfghjk", rating: 0 },
  });
  const user2 = await prisma.user.create({
    data: { login: "mySec User", passwordHash: "asdfghjk", rating: 140 },
  });
  // await prisma.game.create({
  //   data: {
  //     status: "idle",
  //     players: {
  //       connect: {
  //         id: user1.id,
  //       },
  //     },
  //     field: Array(9).fill(null),
  //   },
  // });
  // await prisma.game.create({
  //   data: {
  //     status: "idle",
  //     players: {
  //       connect: {
  //         id: user2.id,
  //       },
  //     },
  //     field: Array(9).fill(null),
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
