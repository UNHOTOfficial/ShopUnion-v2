import Head from "next/head";
import Image from "next/image";
import GetProducts from "../../services/GetProducts";
import ProductRating from "../../components/productRating";
import Breadcrumb from "../../components/breadcrumb";
import ScrollMenu from "../../components/scrollMenu";
import Badge from "../../components/badge";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>ShopUnion - {product.title}</title>
        <meta name="description" content={product.title} />
      </Head>
      <Breadcrumb
        main={product.category.main}
        type={product.category.type}
        title={product.title}
      />
      <div className="py-3 flex flex-wrap justify-center text-gray-900 dark:text-white dark:bg-gray-900">
        <div className="basis-8/12 px-5 lg:basis-2/6 bg-white dark:bg-gray-900 rounded-lg">
          <Image
            className="rounded-lg"
            src={product.image}
            alt={product.title}
            width="300"
            height="240"
            layout="responsive"
            quality="100"
            objectFit="fill"
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          ></Image>
        </div>
        <div className="flex flex-col lg:basis-2/6 xl:basis-3/6 text-xl px-5">
          <span className="my-1 text-xs text-indigo-300 hover:underline md:text-sm ">
            {product.specifications.Brand && product.specifications.Brand}
          </span>
          <span className="text-base md:text-xl">{product.title}</span>
          <ProductRating
            rate={product.rating.rate}
            count={product.rating.count}
            countHidden={"block"}
          />
          {product.hasDiscount === true ? (
            <div className="hidden lg:flex items-center">
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

        <div className="lg:hidden sticky mt-2 bottom-0 left-0 z-5 px-4 py-2 w-full bg-white border-y border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          {product.hasDiscount ? (
            <div className="flex w-full justify-between items-center">
              <div>
                <div>
                  <Badge
                    text={"bg-red-100"}
                    background={"text-red-800"}
                    content={`%${Math.round(
                      100 -
                        ((product.price - product.discount) * 100) /
                          product.price
                    )}`}
                  />
                  <span className="text-sm line-through mr-1 dark:text-slate-300">
                    ${Math.floor(product.price * 100) / 100}
                  </span>
                </div>
                <span className="text-2xl">
                  ${Math.floor((product.price - product.discount) * 100) / 100}
                </span>
              </div>
              <button
                type="button"
                className="flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 md:px-12 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 lg:hidden xl:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <span>${Math.floor((product.price * 100) / 100)}</span>
              <button
                type="button"
                className="flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 md:px-12 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 lg:hidden xl:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
          )}
        </div>

        <div className="hidden px-5 lg:block basis-1/6">
          <div className="bg-slate-300 text-gray-900 rounded-lg p-4 flex flex-col dark:bg-gray-600 dark:text-white">
            <div>
              {product.hasDiscount === true ? (
                <div>
                  <Badge
                    text={"bg-red-100"}
                    background={"text-red-800"}
                    content={`%${Math.round(
                      100 -
                        ((product.price - product.discount) * 100) /
                          product.price
                    )}`}
                  />
                  <span className="text-2xl">
                    $
                    {Math.floor((product.price - product.discount) * 100) / 100}
                  </span>
                  <span className="text-sm line-through dark:text-slate-300">
                    ${Math.floor(product.price * 100) / 100}
                  </span>
                </div>
              ) : (
                <span>${Math.floor(product.price * 100) / 100}</span>
              )}
            </div>
            {product.quantity <= 5 && (
              <span className="text-red-300 dark:text-red-200 mt-2">
                Only {product.quantity} left in stock.
              </span>
            )}
            {product.price >= 500 && (
              <span className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                Free Delivery.
              </span>
            )}
            {product.hasWarranty && (
              <span className="flex mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                Has Warranty.
              </span>
            )}
            {product.price >= 20 && (
              <span className="flex items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="orange"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                {Math.floor(product.price / 10)} Points.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </span>
            )}
            <span className="mt-2">
              Return Policy:
              <Link href="/faqs/return">
                <a className="capitalize text-indigo-300 dark:text-indigo-300">
                  eligible for 30 days return, refund, or replacement policy
                </a>
              </Link>
            </span>
            <button
              type="button"
              className="mt-2 flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 lg:hidden xl:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Add To Cart
            </button>
            <ul className="flex justify-evenly mt-2">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:fill-rose-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:stroke-green-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:fill-blue-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 hover:stroke-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
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
