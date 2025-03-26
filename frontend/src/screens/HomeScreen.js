import {
  Grid,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCard from "../components/ProductCard";
import HomePageSlider from "../components/HomePageSlider";
import GenderCards from "../components/GenderCards";
import TaxonomyCards from "../components/TaxonomyCards";
import OfferCard from "../components/OfferCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts(activeFilter));
  }, [dispatch, activeFilter]);

  // Function to open local index.html file
  const handleOpenFile = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker({
        types: [
          { description: "HTML Files", accept: { "text/html": [".html"] } },
        ],
      });

      const file = await fileHandle.getFile();
      const fileURL = URL.createObjectURL(file);

      // Open in a new tab
      window.open(fileURL, "_blank");
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  return (
    <>
      <HomePageSlider />
      <TaxonomyCards />
      <GenderCards />
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="#52322b"
        textAlign="center"
        mt="8"
      >
        Offers
      </Text>
      <OfferCard />

      {/* Button to Run index.html */}
      <Button
        mt={8}
        colorScheme="teal"
        size="lg"
        onClick={handleOpenFile}
        display="block"
        mx="auto"
      >
        Run index.html
      </Button>
    </>
  );
};

export default HomeScreen;
