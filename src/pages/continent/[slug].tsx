import { Flex } from "@chakra-ui/react";
import { Content } from "../../components/Content";
import { Cities } from "../../components/Content/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="16" px="1rem">
        <Content />
        <Cities/>
      </Flex>
    </Flex>
  );
}
