import Head from "next/head";
import Image from "next/image";
import GetProducts from "../../services/GetProducts";
import ProductRating from "../../components/productRating";
import Breadcrumb from "../../components/breadcrumb";
import ScrollMenu from "../../components/scrollMenu";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>ShopUnion - {product.title}</title>
      </Head>
      <Breadcrumb
        main={product.category.main}
        type={product.category.type}
        title={product.title}
      />
      <div className="my-3 flex flex-wrap justify-center text-gray-900 dark:text-gray-200">
        <div className="basis-8/12 px-5 lg:basis-2/6 bg-white dark:bg-gray-900">
          <Image
            className="rounded-lg"
            src={product.image}
            alt={product.title}
            width="300"
            height="300"
            layout="responsive"
            quality="100"
          ></Image>
        </div>
        <div className="flex flex-col lg:basis-2/6 text-xl px-5">
          <span className="my-1 text-xs text-indigo-300 hover:underline md:text-sm ">
            {product.specifications.Brand && product.specifications.Brand}
          </span>
          <span className="text-base md:text-xl">{product.title}</span>
          <ProductRating
            rate={product.rating.rate}
            count={product.rating.count}
            countHidden={""}
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
          <div className="flex flex-col text-sm mt-3">
            {Object.entries(product.specifications).map((specification) => (
              <div
                key={product._id}
                className="my-1 flex justify-between items-center"
              >
                <span className="font-semibold capitalize w-1/2">
                  {specification[0]}
                </span>
                <span className="w-1/2">{specification[1]}</span>
              </div>
            ))}
          </div>
          <p className="text-sm mt-3">{product.description}</p>
        </div>
        <div className="hidden px-5 lg:block basis-1/6">H</div>
        {/* <ScrollMenu offerProducts={relatedProducts} /> */}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await GetProducts(
    "https://apigenerator.dronahq.com/api/P51aWq0N/products"
  );
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await GetProducts(
    `https://apigenerator.dronahq.com/api/P51aWq0N/products/${params.id}`
  );
  // const relatedProducts = await GetProducts(
  //   `https://apigenerator.dronahq.com/api/P51aWq0N/products`
  // );
  return {
    props: {
      product: product,
      // relatedProducts: relatedProducts,
    },
  };
}
