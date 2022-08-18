import { Grid, GridItem } from "@chakra-ui/react";
import { Travel } from "./Travel";

export function Travels() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      justifyContent="space-between"
      w="100%"
      alignContent="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Travel icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Travel icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Travel icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Travel icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Travel icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
