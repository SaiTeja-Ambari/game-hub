import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {
  BsChevronBarContract,
  BsChevronDoubleDown,
  BsChevronDown,
} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { PlatForm } from "../hooks/useGenre";
interface Props {
  onSelectPlatForm: (platform: PlatForm) => void;
  selectedPlatform: PlatForm | null;
}
const PlatformSelector = ({ onSelectPlatForm, selectedPlatform }: Props) => {
  const { Datas, errors } = usePlatforms();
  if (errors) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {Datas.map((p) => (
          <MenuItem onClick={() => onSelectPlatForm(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
