import { Flex, Grid, Text, Image, Icon } from "@chakra-ui/react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <Flex
      direction="column"
      as="footer"
      justifyContent="center"
      py="5"
      bg={"gray.800"}
      color="white"
    >
      <Grid templateColumns="repeat(4, 1fr)">
        <Image src="images/logo.png" alt="logo" h="100px" />
        <Text>Terms & Conditions</Text>
        <Flex direction="column">
          <Text size="lg" fontWeight="bold" mb={2}>
            Contact Us
          </Text>
          <Text>
            <a href="tel:+1234567890">+1 234 567 890</a>
          </Text>
          <Text>
            <a href="mailto:goldenzest@support.com">goldenzest@support.com</a>
          </Text>
        </Flex>
        <Flex direction="column">
          <Text size="lg" fontWeight="bold" mb={2}>
            Social Media
          </Text>
          <Flex direction="row" gap={4}>
            <Icon as={IoLogoInstagram} color="white" w="6" h="6" />
            <Icon as={IoLogoFacebook} color="white" w="6" h="6" />
            <Icon as={IoLogoYoutube} color="white" w="6" h="6" />
            <Icon as={IoLogoTwitter} color="white" w="6" h="6" />
          </Flex>
        </Flex>
      </Grid>
      <Text textAlign="center">
        Copyright 2025. GZ Store. All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
