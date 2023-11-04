import { useState, useEffect } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
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
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .getAll({
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        }),
  });
};

export default useGames;
