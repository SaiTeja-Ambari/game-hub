import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data : game, isLoading, error} = useGame(slug!);
    if(error) return null;
    if(isLoading) return <Spinner></Spinner>
    return (
        <p>{game?.description_raw}</p>
    )
}

export default GameDetailPage