import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const AboutusScreen = () => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        py={20}
      >
        <Box pr={{ md: 20 }}>
          <Heading as="h1" size="2xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Text>
        </Box>
        <Image
          src="/images/about-us.jpg"
          alt="About us"
          borderRadius="lg"
          w={{ base: "100%", md: "500px" }}
          h={{ base: "250px", md: "auto" }}
        />
      </Flex>
    </Box>
  );
};

export default AboutusScreen;
