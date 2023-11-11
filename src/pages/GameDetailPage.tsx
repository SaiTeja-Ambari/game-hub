import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <SimpleGrid columns={{base : 1, md : 2}} spacing={5}>
        <Box>
      <Heading>{game?.slug.toUpperCase()}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      </Box>
      <Box>
      <GameTrailer gameId={game?.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
