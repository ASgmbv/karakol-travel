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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-164799257-2');
              `,
          }}
        />
        <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "HowTo",
          "name": "Как заброировать тур?",
          "description": "Перейдите на сайт и выберите тур, который вам понравился.",
          "image": {
            "@type": "ImageObject",
            "url": "https://trello-attachments.s3.amazonaws.com/5f5623dda5f75f7368d0df19/5f564e36fe929c34c960c32a/30a8e4c90533f9e9a7d45fcb94de2b12/photo5354937067303448055-min.jpg",
            "height": "406",
            "width": "305"
          },
          "step": [
            {
              "@type": "HowToStep",
              "url": "https://karakol-travel.vercel.app/",
              "name": "Перейдите на сайт",
              "itemListElement": {
                "@type": "HowToDirection",
                "text": "Выберите тур, который вам порнавился."
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://trello-attachments.s3.amazonaws.com/5f5623dda5f75f7368d0df19/5f564e36fe929c34c960c32a/30a8e4c90533f9e9a7d45fcb94de2b12/photo5354937067303448055-min.jpg",
                "height": "406",
                "width": "305"
              }
             }, {
              "@type": "HowToStep",
              "name": "Выберите тур",
              "url": "https://karakol-travel.vercel.app/",
              "itemListElement": {
                "@type": "HowToTip",
                "text": "Выберите тур из списка, предоставленных."
               },
              "image": {
                "@type": "ImageObject",
                "url": "https://trello-attachments.s3.amazonaws.com/5f5623dda5f75f7368d0df19/5f56259008b4584a42f7fb24/fff52be0e8c64935324fb7e797276561/photo5352685267489763105-min.jpg",
                "height": "406",
                "width": "305"
              }
             },{
              "@type": "HowToStep",
              "name": "Позвоните нам",
              "url": "https://karakol-travel.vercel.app/",
              "itemListElement": {
                "@type": "HowToTip",
                "text": "Позвоните по номеру на сайте, назовите назание тура и количество людей."
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://trello-attachments.s3.amazonaws.com/5f5623dda5f75f7368d0df19/5f56258edc9f7520ef6036b5/8d2925eccef9e4f78a749b4a9e079d8c/photo5352685267489763103-min.jpg",
                "height": "406",
                "width": "305"
              } 
            }   
          ]
        }
        </script>
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
