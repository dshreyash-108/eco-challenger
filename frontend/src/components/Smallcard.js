// src/components/Card.js
import { Box, Text } from "@chakra-ui/react";

const Card = ({ title, description }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="lightgreen"
      width="100%"
      maxW="sm"
      p={4}
    >
      <Text fontWeight="bold" fontSize="xl">{title}</Text>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export default Card;
