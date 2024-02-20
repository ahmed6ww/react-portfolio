import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  Center,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack borderRadius="2xl" bg="white">
      <VStack>
        <Image borderRadius="2xl" src={imageSrc} alt={title} />
        <VStack padding={4} alignItems="start">
          <Heading paddingBottom={5} color="black" size="lg">
            {title}
          </Heading>
          <Text paddingBottom={2} color="gray.600">
            {description}
          </Text>
          <Text fontWeight="medium" color="black">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
