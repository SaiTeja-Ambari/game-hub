
import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

  
const useTrailer = (gameId?: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

    return  useQuery({

    queryKey : ['trailers', gameId],
    queryFn : apiClient.getAll,
    staleTime : 24*60*60*1000
  })
};



export default useTrailer;
