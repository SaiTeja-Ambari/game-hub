import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre, PlatForm } from "../hooks/useGenre";
import { GameQuery } from "../App";
interface Props{
  gameQuery : GameQuery
}

const GameGrid = ({gameQuery} : Props) => {
  const { Datas, errors, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return ( 
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
            <GameCardSkeleton ></GameCardSkeleton>
            </GameCardContainer>
          ))}

        {Datas.slice(0, 100).map((game) => (
            <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
