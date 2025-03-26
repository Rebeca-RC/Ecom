import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  FaExchangeAlt,
  FaRing,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const TaxonomyCards = () => {
  const data = [
    { icon: FaExchangeAlt, title: "GZ Exchange" },
    { icon: FaRing, title: "The Purity Guarantee" },
    { icon: FaHandshake, title: "Complete Transparency and Trust" },
    { icon: FaShieldAlt, title: "Lifetime Maintenance" },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Trust us to be part of your precious moments and to deliver jewellery that you'll cherish forever.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)); // Slice ensures no 'undefined'
      index += 1;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box textAlign="center" py={10}>
      <Text
        fontSize="5xl"
        fontWeight="bold"
        color="#9A6F5F"
        mb={6}
        fontStyle="italic"
        border={"2px solid #9A6F5F"}
      >
        {displayedText}
      </Text>

      <Flex justify="center" gap={5} wrap="wrap">
        {data.map((item, index) => (
          <Box
            key={index}
            textAlign="center"
            p={5}
            w="300px"
            border=".2px solid rgb(201, 162, 148)"
            shadow="md"
            bg="#f9d8d6"
            borderRadius="md"
          >
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
