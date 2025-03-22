import React from "react";
import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const OfferCard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Flex justify="center" gap={8} p={8}>
      {/* Offer Card one */}
      <Box
        bg="blue.100"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="lg"
        cursor="pointer"
        _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
        w="300px"
      >
        <Image
          src="/images/discount1.png"
          alt="For Him"
          w="100%"
          h="300px"
          objectFit="cover"
        />
        {/* <Box textAlign="center" py={4}>
          <Heading color="blue.600" size="xl">
            For HIM
          </Heading>
        </Box> */}
      </Box>

      {/* Offer Card two */}
      <Box
        bg="pink.100"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="lg"
        cursor="pointer"
        _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
        w="300px"
      >
        <Image
          src="/images/discount2.png"
          alt="For Her"
          w="100%"
          h="300px"
          objectFit="cover"
        />
        {/* <Box textAlign="center" py={4}>
          <Heading color="pink.500" size="xl">
            For HER
          </Heading>
        </Box> */}
      </Box>

      {/* Offer card three */}
      <Box
        bg="pink.100"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="lg"
        cursor="pointer"
        _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
        w="300px"
      >
        <Image
          src="/images/discount3.png"
          alt="For Her"
          w="100%"
          h="300px"
          objectFit="cover"
        />
        {/* <Box textAlign="center" py={4}>
          <Heading color="pink.500" size="xl">
            For HER
          </Heading>
        </Box> */}
      </Box>
    </Flex>
  );
};

export default OfferCard;
