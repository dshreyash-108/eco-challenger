import { Stack } from "@chakra-ui/react";
import { Header, Button } from "../components";
import SmallCard from "../components/SmallCard";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  let navigate = useNavigate();

  const cardsContent = [
    {
      title: "Tree Planting",
      description: "Join us in planting trees to make our planet greener."
    },
    {
      title: "Recycling Drives",
      description: "Participate in our recycling drives to reduce waste."
    },
    {
      title: "Cleanup Events",
      description: "Help us clean up local parks and beaches parks and beaches. "
    },
    {
      title: "Eco Workshops",
      description: "Learn about sustainable living in our workshops."
    }
  ];

  return (
    <>
      <Header>
        Welcome to
        <br />
        Eco-Challenger
      </Header>
      <Stack direction="row" spacing={4} align="center" justifyContent={"center"}>
        <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
        <Button onClick={() => navigate("/log-in")}>Log In</Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center" justifyContent={"center"} mt={8} wrap="wrap">
        {cardsContent.map((card, index) => (
          <SmallCard key={index} title={card.title} description={card.description} />
        ))}
      </Stack>
    </>
  );
};

export default Welcome;
