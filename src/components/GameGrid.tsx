import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../pages/HomePage";
import React from "react";
interface Props{
  gameQuery : GameQuery
}

const GameGrid = ({gameQuery} : Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if(error) return null
      
  return ( 
    <Box padding = {10}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
            <GameCardSkeleton ></GameCardSkeleton>
            </GameCardContainer>
          ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key = {index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
          </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        
      </SimpleGrid>
      {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={3}>
{isFetchingNextPage ? 'Loading...' : 'Load More'}
      </Button>}
    </Box>
  );
};
export default GameGrid;
