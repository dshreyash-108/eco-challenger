// src/components/SmallCard.js
import { Box, Text } from "@chakra-ui/react";

const SmallCard = ({ title, description, onClick }) => {
  return (
    <Box
    onClick={onClick}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="#006400" // Dark Green
      bg="#90EE90" // Light Green
      width="100%"
      maxW="sm"
      p={6} // Increased padding for better content spacing
      m={4} // Added margin to space out cards
      cursor="pointer"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg"
      }}
    >
      <Text fontWeight="bold" fontSize="xl">{title}</Text>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export default SmallCard;
