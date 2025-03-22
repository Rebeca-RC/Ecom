import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
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
    dispatch(listProducts(id)); // Fetch product details based on ID
  }, [dispatch, id]);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Box>
          {/* Product Image and Name Section */}
          <Flex align="center" mb="6">
            <Image
              src={product.image}
              alt={product.name}
              w="300px"
              h="300px"
              objectFit="cover"
              borderRadius="lg"
              mr="6"
            />
            <Heading as="h2" fontSize="2xl">
              {product.name}
            </Heading>
          </Flex>

          {/* Product Details Table */}
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Rate</Th>
                  <Th>Weight</Th>
                  <Th>GST</Th>
                  <Th>Making Charges</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>₹{product.rate}</Td>
                  <Td>{product.weight}g</Td>
                  <Td>{product.gst}%</Td>
                  <Td>₹{product.makingCharges}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          {/* Additional Info */}
          <Text mt="4" fontSize="lg">
            {product.description}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ProductTable;
