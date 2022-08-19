import { Grid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Informations } from "../Informations/Informations";

interface ContentProps {
  text: string;
  countryNumber: number;
  languageNumber: number;
  cityNumber: number;
  cities: Array<string>;
}

export function Content({
  text,
  countryNumber,
  languageNumber,
  cityNumber,
  cities,
}: ContentProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {text}
      </Text>
      <Informations
        countryNumber={countryNumber}
        languageNumber={languageNumber}
        cityNumber={cityNumber}
        cities={cities}
      />
    </Grid>
  );
}
