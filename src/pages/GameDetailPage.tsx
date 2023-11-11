import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data : game, isLoading, error} = useGame(slug!);
    if(error) return null;
    if(isLoading) return <Spinner></Spinner>
    return (
        <>
        <Heading>{game?.slug}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        </>
    )
}

export default GameDetailPage