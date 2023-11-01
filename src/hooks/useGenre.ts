import { useQuery } from "@tanstack/react-query";
import useData, { fetchedDatas } from "./useData";
import apiClient from "../services/api-client";
export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Genre {
  id: number;
  name: string;
  image_background : string
}


const useGenre = () => useQuery<fetchedDatas<Genre>>({
    queryKey : ['geners'],
    queryFn : () => apiClient.get('/genres').then(res => res.data),
    staleTime : 24*60*60*1000
});

export default useGenre;
