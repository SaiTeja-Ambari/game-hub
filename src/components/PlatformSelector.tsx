import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {
  BsChevronBarContract,
  BsChevronDoubleDown,
  BsChevronDown,
} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { PlatForm } from "../entities/PlatForm";
interface Props {
  onSelectPlatForm: (platform: PlatForm) => void;
  selectedPlatform: PlatForm | null;
}
const PlatformSelector = ({ onSelectPlatForm, selectedPlatform }: Props) => {
  const { data, isLoading, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem onClick={() => onSelectPlatForm(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
