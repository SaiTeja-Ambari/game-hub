import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game.avif";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="100px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
