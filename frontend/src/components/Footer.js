import { Flex, Grid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" py="5">
      <Grid templateColumns="repeat(3, 1fr)">
        <Text>Privacy Policy</Text>
        <Text>Shipping Policy</Text>
        <Text>Return Policy</Text>
        <Text>Terms & Conditions</Text>
        <Text>Contact Us</Text>
        <Text>
          <a href="mailto:zTm0P@example.com">zTm0P@example.com</a>
        </Text>
      </Grid>
      <Text>Copyright 2025. GZ Store. All Rights Reserved.</Text>
    </Flex>
  );
};

export default Footer;
