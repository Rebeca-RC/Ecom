import {
  Grid,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
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
import JewelryViewer from "../components/JewelryViewer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts(activeFilter));
  }, [dispatch, activeFilter]);

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
      <JewelryViewer />
    </>
  );
};

export default HomeScreen;
