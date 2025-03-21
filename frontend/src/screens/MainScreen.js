import {
  Grid,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Slider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts(activeFilter));
  }, [dispatch, activeFilter]);

  const filterOptions = ["All", "Men", "Women", "Children"]; // Example filters

  return (
    <>
      <Slider />
      <Heading as="h2" mb="8" fontSize="xl">
        Latest Products
      </Heading>

      <Tabs
        onChange={(index) =>
          setActiveFilter(
            filterOptions[index] === "All" ? "" : filterOptions[index]
          )
        }
      >
        <TabList>
          {filterOptions.map((filter) => (
            <Tab key={filter}>{filter}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {filterOptions.map((filter, index) => (
            <TabPanel key={index}>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message type="error">{error}</Message>
              ) : (
                <Grid
                  templateColumns={{
                    sm: "1fr",
                    md: "1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr 1fr ",
                  }}
                  gap="8"
                >
                  {products.map((prod) => (
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

export default HomeScreen;
