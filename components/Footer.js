import {
  Container,
  Box,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  Link as ChakraLink,
} from "@chakra-ui/core";

import Link from "next/link";

import { FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        py: 20,
        borderTop: "1px solid",
        bg: "white",
        borderTopColor: "gray.300",
      }}
    >
      <Container maxW="md">
        <Stack direction={["column", "row"]} spacing="10">
          <Stack sx={{ width: ["100%", "50%"] }}>
            <Text sx={{ fontSize: "lg", fontWeight: "bold" }}>О компании</Text>
            <Text sx={{ color: "gray.600", lineHeight: "taller" }}>
              - Возможность увидеть всю красоту 🇰🇬 🏔 🌏 <br /> - Туры каждые
              выходные 🚌 🏞 🧭 <br /> - Цель - не место , а способность смотреть
              на мир по-другому
            </Text>
          </Stack>

          <Stack sx={{ width: ["100%", "50%"] }}>
            <Text sx={{ fontSize: "lg", fontWeight: "bold" }}>Контакты</Text>
            <List direction="column" spacing="2">
              <ListItem
                sx={{ color: "gray.600", d: "flex", alignItems: "baseline" }}
              >
                <Link href="http://instagram.com/karakol_travel" passHref>
                  <ChakraLink target="_blank">
                    <ListIcon as={FaInstagram} />
                    @karakol_travel
                  </ChakraLink>
                </Link>
              </ListItem>
              <ListItem sx={{ color: "gray.600" }}>
                <Link href="tel:+996505804545" passHref>
                  <ChakraLink target="_blank">
                    <ListIcon as={FaPhone} />
                    +996 (505) 80-45-45
                  </ChakraLink>
                </Link>
              </ListItem>
              <ListItem sx={{ color: "gray.600" }}>
                <Link href="mailto:salamatkanagatov@gmail.com" passHref>
                  <ChakraLink target="_blank">
                    salamatkanagatov@gmail.com
                  </ChakraLink>
                </Link>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
