import { Badge } from "@chakra-ui/react"

interface Props{
    score : number
}

const CriticScore = ({score} : Props) => {
    let color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red' 
return <>
<Badge marginRight={4} paddingX={3} borderRadius={4} colorScheme={color}>{score}</Badge></>
}

export default CriticScore;