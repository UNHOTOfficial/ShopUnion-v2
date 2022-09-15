import React from "react";
import ProductCard from "../../components/productCard";
import SideMenu from "../../components/sideMenu";
import GetProducts from "../../services/GetProducts";
import Pagination from "../../components/pagination";
import Breadcrumb from "../../components/breadcrumb";
export default function index({ products }) {
  return (
    <div className="flex justify-around container py-2">
      <div className="sideMenu hidden lg:block">
        <SideMenu />
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                id={product.id}
                hasDiscount={product.hasDiscount}
                price={product.price}
                discount={product.discount}
                rate={product.rating.rate}
                count={product.rating.count}
                quantity={product.quantity}
                type="page"
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
  const products = await GetProducts(
    "https://apigenerator.dronahq.com/api/P51aWq0N/products/"
  );

  return { props: { products: products } };
}
