import { GamesList } from "@/features/games-list/server";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 justify-start items-start w-full h-screen px-8 pt-12">
      <h2 className="text-2xl font-semibold">Игры</h2>
      <GamesList />
    </div>
  );
}
