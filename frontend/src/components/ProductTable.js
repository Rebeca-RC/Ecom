import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProducts(id));
  }, [dispatch, id]);

  return (
    <Box
      maxW="600px"
      mx="auto"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      bg="whiteAlpha.600"
      shadow="lg"
      mt={4}
    >
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Box>
          <Heading as="h2" fontSize="xl" mb="4" textAlign="center">
            Product Details
          </Heading>

          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {/* Rate */}
            <GridItem
              p="4"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
            >
              <Text fontWeight="bold">Rate</Text>
              <Divider my="2" />
              <Text>₹{product.rate}</Text>
            </GridItem>

            {/* Weight */}
            <GridItem
              p="4"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
            >
              <Text fontWeight="bold">Weight</Text>
              <Divider my="2" />
              <Text>{product.weight}g</Text>
            </GridItem>

            {/* GST */}
            <GridItem
              p="4"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
            >
              <Text fontWeight="bold">GST</Text>
              <Divider my="2" />
              <Text>{product.gst}%</Text>
            </GridItem>

            {/* Making Charges */}
            <GridItem
              p="4"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
            >
              <Text fontWeight="bold">Making Charges</Text>
              <Divider my="2" />
              <Text>₹{product.makingCharge}</Text>
            </GridItem>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ProductTable;
