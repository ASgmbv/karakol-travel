import { Flex, Box, Image, Text, Grid, Button, Stack } from "@chakra-ui/core";

import {
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaSortAmountUpAlt,
  FaRegUser,
} from "react-icons/fa";

function groupSizeToRussian(size) {
  if (size === 11 || size === 12 || size === 13 || size === 14) {
    return "человек";
  } else {
    let a = size % 10;
    if (a === 2 || a === 3 || a === 4) {
      return "человека";
    } else {
      return "человек";
    }
  }
}

const TourCard = ({
  name,
  short_description,
  destination,
  date,
  group_size,
  difficulty,
  price,
  image,
}) => {
  return (
    <Flex
      sx={{
        width: "100%",
        maxWidth: "sm",
        p: 1,
        border: "1px solid",
        borderColor: "gray.300",
        bg: "white",
        borderRadius: "md",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            clipPath: "polygon(0 0, 100% 0%, 100% 83%, 0% 98%)",
            height: "18rem",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to right bottom, #5987bd, #342fc4)",
              opacity: 0.3,
            }}
          />
          <Image
            objectFit="cover"
            height="100%"
            width="100%"
            bg="blue.100"
            src={image}
          />
        </Box>
        <Text
          as="h3"
          sx={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            width: "70%",
            textAlign: "right",
            zIndex: 10,
            p: "1rem 1.5rem",
            backgroundImage:
              "linear-gradient( to bottom right, rgba(141, 158, 214, 0.85), rgba(52, 47, 196, 0.85) )",
            fontSize: "xl",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {name}
        </Text>
      </Box>
      <Flex sx={{ p: 6, flexDirection: "column" }}>
        <Flex sx={{ pb: 6, fontStyle: "italic" }}>{short_description}</Flex>
        <Grid sx={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          <Stack direction="row" align="center">
            <FaMapMarkerAlt style={{ color: "#6680D9", fontSize: "20px" }} />
            <Text sx={{}}>{destination}</Text>
          </Stack>
          <Stack direction="row" align="center">
            <FaRegCalendarAlt style={{ color: "#6680D9", fontSize: "20px" }} />
            <Text sx={{}}>{date}</Text>
          </Stack>
          <Stack direction="row" align="center">
            <FaRegUser style={{ color: "#6680D9", fontSize: "20px" }} />
            <Text sx={{}}>
              {group_size + " " + groupSizeToRussian(group_size)}
            </Text>
          </Stack>
          <Stack direction="row" align="center">
            <FaSortAmountUpAlt style={{ color: "#6680D9", fontSize: "20px" }} />
            <Text sx={{}}>{difficulty}</Text>
          </Stack>
        </Grid>
      </Flex>
      <Flex
        sx={{
          p: 6,
          bg: "gray.100",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text as="span" sx={{ fontSize: "xl", fontWeight: "bold" }}>
          {`${price} сом`}
        </Text>
        <Button colorScheme="purple" borderRadius="full">
          Подробнее
        </Button>
      </Flex>
    </Flex>
  );
};

export default TourCard;
