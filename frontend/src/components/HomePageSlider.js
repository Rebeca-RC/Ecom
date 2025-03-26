import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

const HomePageSlider = () => {
  const slides = [
    { id: 1, image: "/images/2.png" },
    { id: 2, image: "/images/second.png" },
    { id: 3, image: "/images/third.png" },
  ];

  return (
    <Box position="relative" height="80vh" width="100%">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ height: "80vh" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              as="img"
              src={slide.image}
              alt={`Slide ${slide.id}`}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HomePageSlider;
