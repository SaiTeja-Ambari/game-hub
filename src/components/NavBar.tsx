import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game.avif";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="30px">
      <Link to="/">
        <Image src={logo} boxSize="100px" objectFit={"cover"}></Image>
      </Link>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
