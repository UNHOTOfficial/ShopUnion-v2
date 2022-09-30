import Head from "next/head";
import React from "react";
import ProductCard from "../../components/productCard";
import ScrollMenu from "../../components/scrollMenu";
import DetectOfferProducts from "../../services/DetectOfferProducts";
import GetProducts from "../../services/GetProducts";
import Pagination from "../../components/pagination";
import SideMenu from "../../components/sideMenu";
export default function index({ offers }) {
  return (
    <>
      <Head>
        <title>ShopUnion - Offers</title>
        <meta name="description" content="ShopUnion Offers Products." />
      </Head>

      <div className="text-gray-900 dark:text-white dark:bg-gray-900">
        <ScrollMenu offerProducts={offers} type="offer" />
        <div className="flex my-3">
          <SideMenu />
          <div className="flex flex-col">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {offers.map((offer) => (
                <ProductCard
                  key={offer.id}
                  image={offer.image}
                  title={offer.title}
                  description={offer.description}
                  id={offer.id}
                  hasDiscount={offer.hasDiscount}
                  price={offer.price}
                  discount={offer.discount}
                  rate={offer.rating.rate}
                  count={offer.rating.count}
                  quantity={offer.quantity}
                  type="page"
                />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const offers = await DetectOfferProducts(
    "https://apigenerator.dronahq.com/api/P51aWq0N/products/"
  );

  return { props: { offers } };
}
