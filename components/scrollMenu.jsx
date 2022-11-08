import Link from "next/link";
import React from "react";
import ProductCard from "./productCard";
export default function scrollMenu({ offerProducts, type, name }) {
  const scrollMenuWheel = () => {
    const row = document.getElementById("scrollRow");
    row.addEventListener("wheel", (event) => {
      event.preventDefault();

      row.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: "auto",
      });
    });
  };

  const dragScrollMenu = () => {
    const row = document.getElementById("scrollRow");

    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    });
    row.addEventListener("mouseleave", () => {
      isDown = false;
    });
    row.addEventListener("mouseup", () => {
      isDown = false;
    });
    row.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      row.scrollLeft = scrollLeft - walk;
    });
  };

  const scrollArrowLeft = () => {
    const row = document.querySelector("#scrollRow");
    row.scrollBy({
      left: (Event.deltaY = -140),
    });
  };

  const scrollArrowRight = () => {
    const row = document.querySelector("#scrollRow");
    row.scrollBy({
      left: (Event.deltaY = 140),
    });
  };

  return (
    <div className="flex flex-col m-5 rounded-2xl bg-slate-300 p-4 dark:bg-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h2 className="capitalize text-base text-gray-900 md:text-3xl dark:text-white">
          {name}
        </h2>
        <Link href="/offers">
          <a className="text-indigo-700 hover:underline dark:text-indigo-600">
            See More...
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={scrollArrowLeft}
          id="scrollButtonLeft"
          aria-label="left"
          type="button"
          className="hidden  text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
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
        <div
          onMouseDown={dragScrollMenu}
          onWheel={scrollMenuWheel}
          id="scrollRow"
          className="flex overflow-auto lg:overflow-hidden"
        >
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
          onClick={scrollArrowRight}
          id="scrollButtonRight"
          aria-label="left"
          type="button"
          className="hidden text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
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
