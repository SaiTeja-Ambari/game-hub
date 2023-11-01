
import apiClient, { fetchedDatas } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey : ['platforms'],
  queryFn : () => apiClient.get<fetchedDatas<PlatForm>>("platforms/lists/parents").then(res => res.data),
  staleTime : 24*60*60*1000
})
export default usePlatforms 
