import { useParams } from "react-router-dom";
import { useState } from "react";
import { Box, Heading, Text, Button, Checkbox, Stack, Input, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

const EventDetail = () => {
  const { eventType } = useParams();
  const [isFormVisible, setFormVisible] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  const eventDetails = {
    "tree-planting": {
      title: "Tree Planting",
      description: "Join us in planting trees to make our planet greener."
    },
    "recycling-drives": {
      title: "Recycling Drives",
      description: "Participate in our recycling drives to reduce waste."
    },
    "cleanup-events": {
      title: "Cleanup Events",
      description: "Help us clean up local parks and beaches."
    },
    "eco-workshops": {
      title: "Eco Workshops",
      description: "Join our workshops to learn about sustainable living."
    }
  };

  const { title, description } = eventDetails[eventType] || {};

  if (!title) {
    return <Text color="red.500">Event not found</Text>;
  }

  const handleSignUpClick = () => {
    setFormVisible(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRegistered(true);
  };

  return (
    <Box p={5}>
      <Heading color="green.500">{title}</Heading>
      <Text mt={3} color="green.600">{description}</Text>
      <Stack mt={5} spacing={3}>
        <Checkbox colorScheme="green">
          I'm interested
        </Checkbox>
        {!isFormVisible && !isRegistered && (
          <Button colorScheme="green" variant="solid" onClick={handleSignUpClick}>
            Sign Up
          </Button>
        )}
      </Stack>
      {isFormVisible && !isRegistered && (
        <Box as="form" mt={5} onSubmit={handleFormSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel color="green.500">Name</FormLabel>
            <Input type="text" focusBorderColor="green.500" />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel color="green.500">Email</FormLabel>
            <Input type="email" focusBorderColor="green.500" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <Button mt={4} colorScheme="green" type="submit">
            Submit
          </Button>
        </Box>
      )}
      {isRegistered && (
        <Text mt={5} color="green.500">
          You have successfully registered for the event!
        </Text>
      )}
    </Box>
  );
};

export default EventDetail;
