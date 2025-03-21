import React from "react";
import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GenderCards = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Flex justify="center" gap={8} p={8}>
      {/* Card for HIM */}
      <Box
        bg="blue.100"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="lg"
        cursor="pointer"
        _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
        onClick={() => handleNavigation("/for-him")}
        w="300px"
      >
        <Image
          src="/images/him.jpg"
          alt="For Him"
          w="100%"
          h="300px"
          objectFit="cover"
        />
        <Box textAlign="center" py={4}>
          <Heading color="blue.600" size="xl">
            For HIM
          </Heading>
        </Box>
      </Box>

      {/* Card for HER */}
      <Box
        bg="pink.100"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="lg"
        cursor="pointer"
        _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
        onClick={() => handleNavigation("/for-her")}
        w="300px"
      >
        <Image
          src="/images/her.jpg"
          alt="For Her"
          w="100%"
          h="300px"
          objectFit="cover"
        />
        <Box textAlign="center" py={4}>
          <Heading color="pink.500" size="xl">
            For HER
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
};

export default GenderCards;
