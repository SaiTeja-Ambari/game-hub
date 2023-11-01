import { useState, useEffect } from "react";
import apiClient, { fetchedDatas } from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery
) => {
  return useQuery({
    queryKey : ['games', gameQuery],
    queryFn : () => apiClient.get<fetchedDatas<Game>>('/games', {
      params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering : gameQuery.sortOrder, search : gameQuery.searchText } }
    ).then(res => res.data)
    

  }) 
};

export default useGames;
