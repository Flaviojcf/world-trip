import { Flex } from "@chakra-ui/react";
import { Content } from "../../components/Content";
import { Cities } from "../../components/Content/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner
        country="Europa"
        bgImage="url('/countries/bannerEurope.png')"
      />
      <Flex direction="column" maxW="1160px" mx="auto" mb="16" px="1rem">
        <Content
          text="A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
          countryNumber={50}
          languageNumber={60}
          cityNumber={27}
          cities={[
            "Hamburgo",
            "Munique",
            "Frankfurt",
            "Turim",
            "Florença",
            "Veneza",
            "Paris",
            "Barcelona",
          ]}
        />
        <Cities />
      </Flex>
    </Flex>
  );
}
