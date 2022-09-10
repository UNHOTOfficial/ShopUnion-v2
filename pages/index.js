import axios from "axios";
import Head from "next/head";
import React from "react";
import Carousel from "../Components/Carousel";
import GetProducts from "../services/GetProducts";
export default function Home({sliderImages}) {
  return (
    <>
      <Head>
        <title>ShopUnion</title>
      </Head>
      <div>
        <Carousel sliderImages={sliderImages}/>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const sliderImages = await GetProducts("http://localhost:3000/api/slider");

  return {
    props: {
      sliderImages: sliderImages.data,
    },
  };
}
