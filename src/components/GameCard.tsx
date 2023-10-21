import { Card, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import { color } from "framer-motion";

interface Props{
    game : Game;
}
const GameCard = ({game} : Props) => {
return (
<Card borderRadius={"10px"} overflow={"hidden"} >
<Image src = {game.background_image}></Image>
<Heading fontSize={"2xl"}>{game.name}</Heading>
<PlatformIcons platforms={game.parent_platforms.map(p => p.platform) } />
</Card>);
}

export default GameCard;