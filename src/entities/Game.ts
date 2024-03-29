import Genre from "./Genre";
import PlatForm from "./PlatForm";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
}
