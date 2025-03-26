import {
  Grid,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCard from "../components/ProductCard";

const MenScreen = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts(activeFilter));
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0 && !activeFilter) {
      setActiveFilter(filterOptions["all"]); // Automatically select "All" or first available filter
    }
  }, [products]);

  const filterOptions = useMemo(() => {
    return [
      "All",
      ...new Set(products.map((prod) => prod.filter?.toLowerCase())),
    ];
  }, [products]);

  const filteredProducts = products
    .filter((prod) => prod.category?.toLowerCase().includes("men"))
    .filter((prod) =>
      activeFilter
        ? prod.filter?.toLowerCase().includes(activeFilter.toLowerCase())
        : true
    );

  return (
    <>
      <Heading as="h2" mb="8" fontSize="xl">
        Latest Products for Men
      </Heading>

      <Tabs
        variant="unstyled"
        onChange={(index) =>
          setActiveFilter(
            filterOptions[index] === "All" ? "" : filterOptions[index]
          )
        }
      >
        <TabList display="flex" gap={4} flexWrap="wrap" mb={4}>
          {filterOptions.map((filter, index) => (
            <Tab
              key={filter}
              bg="gray.100"
              _selected={{
                bg: "gray.400", // Darker color for active tab
                color: "white",
                fontWeight: "bold",
              }}
              borderRadius="md"
              px="6"
              py="2"
              boxShadow="md"
              cursor="pointer"
              minW="100px"
              textAlign="center"
            >
              {filter}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {filterOptions.map((filter, index) => (
            <TabPanel key={filter}>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message type="error">{error}</Message>
              ) : (
                <Grid
                  templateColumns={{
                    sm: "1fr",
                    md: "1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr 1fr",
                  }}
                  gap="8"
                >
                  {filteredProducts
                    .filter((prod) =>
                      activeFilter
                        ? prod.filter
                            ?.toLowerCase()
                            .includes(activeFilter.toLowerCase())
                        : true
                    )
                    .map((prod) => (
                      <ProductCard key={prod._id} product={prod} />
                    ))}
                </Grid>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MenScreen;
