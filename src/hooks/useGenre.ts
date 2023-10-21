import useData from "./useData";
export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Genre {
  id: number;
  name: string;
}


const useGenre = () => {
    return useData<Genre>('genres');
};

export default useGenre;
