import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { Datas } = useGenre();
  return (
    <List>
      {Datas.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image
            boxSize="32px"
            borderRadius={8}
            src={getCroppedImageURL(genre.image_background)}
          />
          <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
      </ListItem>
    ))}
    </List>
  );
};

export default GenreList;
