import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<PlatForm>("platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatforms;
