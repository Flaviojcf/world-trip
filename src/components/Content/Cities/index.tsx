import { Grid, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { City } from "./City";

export function Cities() {
  const { asPath } = useRouter();

  const teste = asPath === "/continent/europe";

  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades+100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {teste ? (
          <>
            <City
              city="Londres"
              cityImage="/countries/london.png"
              flag="/flags/uk.png"
              country="Reino Unido"
            />
            <City
              city="Paris"
              cityImage="/countries//paris.png"
              flag="/flags/franceFlag.png"
              country="França"
            />
            <City
              city="Roma"
              cityImage="/countries//rome.png"
              flag="/flags/italyFlag.png"
              country="Itália"
            />
            <City
              city="Praga"
              cityImage="/countries//prague.png"
              flag="/flags/republicFlag.png"
              country="República Tcheca"
            />
            <City
              city="Amsterdã"
              cityImage="/countries/amsterdam.png"
              flag="/flags/netherlandsFlag.png"
              country="Holanda"
            />
          </>
        ) : (
          <>
            <City
              city="Xangai"
              cityImage="/countries/shanghai.avif"
              flag="/flags/chinaFlag.png"
              country="China"
            />
            <City
              city="Tóquio"
              cityImage="/countries/toquio.png"
              flag="/flags/japanFlag.png"
              country=" Japão"
            />
            <City
              city="Karachi"
              cityImage="/countries/karachi.jpg"
              flag="/flags/pakistanFlag.png"
              country="Paquistão"
            />
            <City
              city="Istambul"
              cityImage="/countries/instambul.png"
              flag="/flags/turkeyFlag.png"
              country="Turquia"
            />
            <City
              city="Seul"
              cityImage="/countries/seul.png"
              flag="/flags/southKoreaFlag.png"
              country="Coreia do Sul"
            />
          </>
        )}
      </Grid>
    </>
  );
}
