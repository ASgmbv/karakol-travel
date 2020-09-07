import { Box, Container, Image, Link, Stack, ListItem } from "@chakra-ui/core";

const Header = () => {
  return (
    <Box
      as="header"
      sx={{
        borderBottom: "1px solid",
        bg: "white",
        borderBottomColor: "gray.300",
      }}
    >
      <Container
        maxW="xl"
        sx={{
          bg: "white",
          height: "16",
          d: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link>
          <Image src="/Logo.png" />
        </Link>
        <Box as="nav">
          <Stack as="ul" direction="row" spacing="8" sx={{ listStyle: "none" }}>
            <ListItem>
              <Link sx={{ fontWeight: "semibold" }}>Туры</Link>
            </ListItem>
            <ListItem>
              <Link sx={{ fontWeight: "semibold" }}>Контакты</Link>
            </ListItem>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
