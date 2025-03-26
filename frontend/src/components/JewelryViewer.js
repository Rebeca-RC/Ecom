import { Box, Button, Heading } from "@chakra-ui/react";

const JewelryViewer = () => {
  const handleOpenDemo = () => {
    window.open("/index1.html", "_blank"); // Opens in a new tab
  };

  return (
    <Box textAlign="center" p={4}>
      <Heading mb={4}>Jewelery</Heading>
      <Button colorScheme="teal" onClick={handleOpenDemo}>
        View Jewelry Demo
      </Button>
    </Box>
  );
};

export default JewelryViewer;
