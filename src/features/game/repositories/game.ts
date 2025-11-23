import { z } from "zod";
import {
  GameEntity,
  GameIdleEntity,
  GameInProgressEntity,
  GameOverDrawEntity,
  GameOverEntity,
} from "@/features/game/domain";
import { prisma } from "@/shared/lib/db";
import { Game, User } from "@prisma/client";

async function gameList(): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    include: {
      winner: true,
      players: true,
    },
  });

  return games.map(dbGameToGameEntity);
}

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity(
  game: Game & {
    players: User[];
    winner?: User | null;
  },
): GameEntity {
  switch (game.status) {
    case "idle": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
      } satisfies GameIdleEntity;
    }
    case "inProgress": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      } satisfies GameInProgressEntity;
    }
    case "gameOver": {
      if (!game.winner) throw new Error("winner should be in Game Over");
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
        winner: game.winner,
      } satisfies GameOverEntity;
    }
    case "gameOverDraw": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      } satisfies GameOverDrawEntity;
    }
  }
}

export const gameRepository = {};
