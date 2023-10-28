import { useState } from "react";
import "./App.css";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { PlatForm } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genre: Genre | null;
  platform: PlatForm | null;
  sortOrder : string 
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={5}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight = {5}>
          <PlatformSelector
            selectedPlatform={gameQuery?.platform}
            onSelectPlatForm={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          </Box>
          <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder = {(sortOrder) => setGameQuery({...gameQuery, sortOrder})}></SortSelector>  
        </Flex>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
