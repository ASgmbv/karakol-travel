import Head from "next/head";

import {
  Box,
  Image,
  Container,
  Flex,
  AspectRatio,
  Heading,
  Stack,
  Center,
  Wrap,
  Grid,
} from "@chakra-ui/core";

import TourCard from "../components/TourCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

//[{"name":"Вокруг Иссык-Куля","short_description":"Exploring the jaw-dropping US east coast by foot and by boat","destination":"Иссык-Куль","price":"1500","difficulty":"Легкая","group_size":"20","date":"21 - Июнь"},{"name":"ddvmkdvmk","short_description":"Описание","destination":"Дестинация","price":"Цена","difficulty":"Сложность","group_size":"Группа","date":"Дата"}]

export default function Home({ tours }) {
  return (
    <>
      <Head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164799257-2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-164799257-2');
        </script>
        <title>Karakol Travel</title>
      </Head>
      <Header />
      <Box as="main" sx={{ bg: "gray.50", py: 8 }}>
        <Container as="section" maxW="xl">
          <Heading
            as="h2"
            sx={{ fontSize: ["2xl", "3xl"], textAlign: "center", mb: 8 }}
          >
            Ближайшие туры
          </Heading>
          <Grid
            width="100%"
            sx={{
              gridTemplateColumns: [
                "1fr",
                null,
                "repeat(2, 1fr)",
                null,
                "repeat(3, 1fr)",
              ],
              justifyItems: "center",
            }}
            gap={8}
          >
            {tours.map((tour, index) => (
              <TourCard {...tour} key={index} />
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const { getTours } = require("../lib/data");
  let tours = await getTours();
  return {
    props: {
      tours,
    },
    revalidate: 1,
  };
};
