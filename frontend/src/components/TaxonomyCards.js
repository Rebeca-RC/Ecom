import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaExchangeAlt,
  FaRing,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const TaxonomyCards = () => {
  const data = [
    { icon: FaExchangeAlt, title: "Tanishq Exchange" },
    { icon: FaRing, title: "The Purity Guarantee" },
    { icon: FaHandshake, title: "Complete Transparency and Trust" },
    { icon: FaShieldAlt, title: "Lifetime Maintenance" },
  ];

  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={6}>
        Trust us to be part of your precious moments and to deliver jewellery
        that you'll cherish forever.
      </Text>

      <Flex justify="space-around" gap={10} wrap="wrap">
        {data.map((item, index) => (
          <Box key={index} textAlign="center" p={5} w="200px">
            <Icon as={item.icon} boxSize={12} color="#AA7123" mb={3} />
            <Text fontSize="lg" fontWeight="semibold" color="gray.600">
              {item.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TaxonomyCards;
