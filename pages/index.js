import React from "react";
import ProductCard from "../Components/ProductCard";
import SideMenu from "../Components/SideMenu";
import GetProducts from "../services/GetProducts";
import Pagination from "../Components/Pagination";
export default function Home({ products }) {
  return (
    <div className="flex justify-between container">
      <SideMenu />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                id={product._id}
                hasDiscount={product.hasDiscount}
                price={product.price}
                discount={product.discount}
                rate={product.rating.rate}
                count={product.rating.count}
              />
            </React.Fragment>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await GetProducts("http://localhost:3000/api/products");

  return { props: { products: products.data } };
}
