import { prisma } from "@/shared/lib/db";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {games.map((game) => {
        return (
          <Card key={game.id}>
            <CardTitle>{game.id}</CardTitle>
          </Card>
        );
      })}
    </div>
  );
}
