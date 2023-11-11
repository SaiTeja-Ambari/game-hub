import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading>{game?.slug.toUpperCase()}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
    </>
  );
};

export default GameDetailPage;
