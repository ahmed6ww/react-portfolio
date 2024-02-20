import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ahmed!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name="Ahmed" src="ahmed.jpg" size="2xl"></Avatar>
    <Heading p={2} size="md">
      {greeting}
    </Heading>
    <Heading paddingTop={6}>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
