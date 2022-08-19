import { Flex } from "@chakra-ui/react";
import { Content } from "../../components/Content";
import { Cities } from "../../components/Content/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner country="Ásia" bgImage="url('/countries/asia.avif')" />
      <Flex direction="column" maxW="1160px" mx="auto" mb="16" px="1rem">
        <Content
          text="A Ásia é o maior dos continentes, tanto em área como em população. 
          Abrange um terço das partes sólidas da superfície da Terra e é responsável 
          por abrigar quase três quintos da população mundial. A Ásia faz fronteira no 
          lado ocidental com a África e com a Europa, e no lado oriental com o oceano 
          Pacífico, a Oceania e, em menor proporção, com a América do Norte, 
          pelo Estreito de Bering."
          countryNumber={50}
          languageNumber={2300}
          cityNumber={27}
          cities={[
            "	Xi'an ",
            "Wuhan",
            "Hyderabad",
            "Ancara",
            "Chengdu",
            "Chittagong",
            "Tianjin",
            "Shenyang",
          ]}
        />
        <Cities />
      </Flex>
    </Flex>
  );
}
