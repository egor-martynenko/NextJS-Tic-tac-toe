import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

const GameCard = ({ login, rating }: { login: string; rating: number }) => {
  return (
    <Card>
      <CardTitle className="px-4">Организатор: {login}</CardTitle>
      <CardContent>Рейтинг: {rating}</CardContent>
      <CardFooter>
        <Button>Подключиться</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
