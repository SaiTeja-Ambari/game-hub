import { useState } from "react";
import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { Genre } from "../entities/Genre";
import { PlatForm } from "../entities/PlatForm";
export interface GameQuery {
    genre: Genre | null;
    platform: PlatForm | null;
    sortOrder: string;
    searchText: string;
  }
const HomePage = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: `1fr`,
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery?.platform}
                  onSelectPlatForm={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                ></PlatformSelector>
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    );
}

export default HomePage;