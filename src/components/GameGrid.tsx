import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const {games, errors} = useGames();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.slice(0, 100).map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
