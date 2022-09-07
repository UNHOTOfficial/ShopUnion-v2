import Head from "next/head";
import Image from "next/image";
import GetProducts from "../../services/GetProducts";
import ProductRating from "../../Components/ProductRating";
import Breadcrumb from "../../Components/Breadcrumb";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>ShopUnion - {product.title}</title>
      </Head>
      <Breadcrumb main={product.category.main} type={product.category.type} title={product.title}/>
      <div className="flex flex-wrap justify-center text-gray-900 dark:text-gray-200">
        <div className="basis-8/12 px-5 lg:basis-2/6">
          <Image
            className="rounded-lg"
            src={product.image}
            alt={product.title}
            height="400"
            width="400"
            layout="responsive"
            quality="100"
          ></Image>
        </div>
        <div className="basis-8/12  lg:basis-2/6 text-xl px-5">
          <h4>{product.title}</h4>
          <ProductRating
            rate={product.rating.rate}
            count={product.rating.count}
          />
          {product.hasDiscount === true ? (
            <div className="flex items-center">
              <span className="bg-red-100 text-red-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded-2xl dark:bg-red-200 dark:text-red-900">
                %
                {Math.round(
                  100 -
                    ((product.price - product.discount) * 100) / product.price
                )}
              </span>
              <span className="text-2xl mx-2">
                ${Math.floor((product.price - product.discount) * 100) / 100}
              </span>
              <span className="text-sm line-through">
                ${Math.floor(product.price * 100) / 100}
              </span>
            </div>
          ) : (
            <span>${product.price}</span>
          )}
          <div className="flex flex-col text-sm">
            {Object.entries(product.specifications).map((specification) => (
              <div key={product._id} className="flex justify-between">
                <span className="font-semibold uppercase">
                  {specification[0]}
                </span>
                <span>{specification[1]}</span>
              </div>
            ))}
          </div>
          <div>{product.description}</div>
        </div>
        <div className="hidden px-5 lg:block basis-1/6">H</div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await GetProducts("http://localhost:3000/api/products");
  const paths = products.data.map((product) => ({
    params: { id: product._id },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await GetProducts(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: product.data,
    },
  };
}
