import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface InformationsProps {
  countryNumber: number;
  languageNumber: number;
  cityNumber: number;
  cities: Array<string>;
}

export function Informations({
  countryNumber,
  languageNumber,
  cityNumber,
  cities,
}: InformationsProps) {
  const Cities = cities;

  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {countryNumber}
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {languageNumber}
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {cityNumber}
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton m="auto" />
              <PopoverBody fontSize="lg" fontWeight="400" mt="2">
                {Cities.map((city) => ` ${city}; `)}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
