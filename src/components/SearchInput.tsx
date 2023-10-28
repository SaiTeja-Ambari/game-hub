import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={10}
        placeholder="Search Games"
        variant="field"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
