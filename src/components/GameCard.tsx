import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import { color } from "framer-motion";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} ></Image>
      <Heading fontSize={"2xl"}>{game.name}</Heading>
      <HStack justifyContent="space-between">
      <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)} />
      <CriticScore score={game.metacritic}/>
      </HStack>
    </Card>
  );
};

export default GameCard;
