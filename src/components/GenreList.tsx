import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";
interface Props{
  onSelectGenre : (genre: Genre) => void;
  selectedGenre : Genre | null;
}
const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button whiteSpace ='normal' textAlign = 'left' fontWeight= {genre.id == selectedGenre?.id ? 'bold' : 'normal'} variant = 'link' fontSize="lg" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
        
      ))}
    </List>
    </>
  );
};

export default GenreList;
