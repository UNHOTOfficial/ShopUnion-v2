import axios from "axios";
import Head from "next/head";
import React from "react";
import Carousel from "../components/carousel";
import GetProducts from "../services/GetProducts";
import ScrollMenu from "../components/scrollMenu";
import HomeCategories from "../components/homeCategories";
export default function Home({ sliderImages, offerProducts, categories }) {
  return (
    <>
      <Head>
        <title>ShopUnion</title>
        <meta
          name="description"
          content="ShopUnion - One Of The Biggest Online Shops."
        />
      </Head>
      <div>
        <Carousel sliderImages={sliderImages} />
        <HomeCategories categories={categories} />
        <ScrollMenu offerProducts={offerProducts} type="menu"/>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const sliderImages = await GetProducts(
    "https://apigenerator.dronahq.com/api/25-FaSpo/sliderz"
  );
  const offers = await GetProducts(
    "https://apigenerator.dronahq.com/api/U8Y0Ntkw/offers"
  );
  const categories = await GetProducts(
    "https://apigenerator.dronahq.com/api/ImisGQ9N/categories"
  );
  return {
    props: {
      sliderImages: sliderImages,
      offerProducts: offers,
      categories: categories,
    },
  };
}
