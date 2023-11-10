import { useState, useEffect } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenre";
import { GameQuery } from "../pages/HomePage";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { PlatForm } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      apiClient
        .getAll({
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page : pageParam
          },
        }),
    getNextPageParam : (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  });
};

export default useGames;
