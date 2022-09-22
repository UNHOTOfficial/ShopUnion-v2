import Link from "next/link";
import React from "react";
import ProductCard from "./productCard";
export default function scrollMenu({ offerProducts, type }) {
  return (
    <div className="flex flex-col bg-slate-300 p-4 dark:bg-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-gray-900 text-3xl dark:text-white">Offers</h2>
        <Link href="/offers">
          <a className="text-indigo-400 hover:underline dark:text-indigo-300">
            See More...
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <button
          aria-label="left"
          type="button"
          className="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div className="flex  overflow-auto">
          {offerProducts.map((product) => (
            <div key={product.title}>
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
                type={type}
              />
            </div>
          ))}
        </div>
        <button
          aria-label="left"
          type="button"
          className="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
