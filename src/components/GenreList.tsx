import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";
interface Props{
  onSelectGenre : (genre: Genre) => void;
  selectedGenre : Genre | null;
}
const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
  const { Datas, loading, errors } = useGenre();

  if (loading) return <Spinner />;
  if (errors) return null;

  return (
    <List>
      {Datas.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button fontWeight= {genre.id == selectedGenre?.id ? 'bold' : 'normal'}variant = 'link' fontSize="lg" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
