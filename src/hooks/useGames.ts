import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";
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
  return useData<Game>(
    "games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery.genre?.id, gameQuery.platform?.id]
  );
};

export default useGames;
