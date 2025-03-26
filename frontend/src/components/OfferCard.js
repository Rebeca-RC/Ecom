import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const OfferCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  const offers = [
    { id: 1, image: "/images/discount1.png", alt: "For Him" },
    { id: 2, image: "/images/discount2.png", alt: "For Her" },
    { id: 3, image: "/images/discount3.png", alt: "Special Offer" },
  ];

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <Flex justify="center" gap={8} p={8}>
        {offers.map((offer) => (
          <Box
            key={offer.id}
            bg="gray.100"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="lg"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
            w="300px"
            onClick={() => handleOpenModal(offer.image)}
          >
            <Image
              src={offer.image}
              alt={offer.alt}
              w="100%"
              h="300px"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>

      {/* Modal for Enlarged Image */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="2xl" boxShadow="2xl">
          <ModalCloseButton />
          <ModalBody p={4}>
            <Box
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="lg"
              w="100%"
              h="70vh"
            >
              <Image
                src={selectedImage}
                alt="Expanded Offer"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OfferCard;
