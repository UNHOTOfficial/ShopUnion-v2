import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "./badge";
import ProductRating from "./productRating";

export default function ProductCard({
  image,
  title,
  description,
  id,
  hasDiscount,
  price,
  discount,
  rate,
  count,
  quantity,
  type,
}) {
  switch (type) {
    case "page":
      return (
        <div className="m-1 rounded-lg bg-white border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
          <div className="bg-white rounded-t-lg p-2">
            <Link href={`/products/${id}`}>
              <a>
                <Image
                  className="rounded-t-lg select-none"
                  draggable="false"
                  src={image}
                  alt={title}
                  quality="100"
                  width={150}
                  height={150}
                  layout="responsive"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                />
              </a>
            </Link>
          </div>
          <div className="p-3 md:p-5">
            <Link href={`/products/${id}`}>
              <a>
                <span
                  className="select-none mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "4",
                    lineClamp: "4",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </span>
              </a>
            </Link>
            <ProductRating rate={rate} count={count} countHidden={"block"} />
            <div className="text-gray-900 dark:text-white pt-2">
              {hasDiscount ? (
                <div className="flex flex-col items-start xl:flex-row md:items-center ">
                  {Math.round(100 - ((price - discount) * 100) / price) >=
                  40 ? (
                    <div className="flex flex-row justify-between xl:flex-col">
                      <Badge
                        text={"bg-red-100"}
                        background={"text-red-800"}
                        content={`%${Math.round(
                          100 - ((price - discount) * 100) / price
                        )}`}
                      />
                      <span className="text-sm text-red-300 dark:text-red-100">
                        OFFER
                      </span>
                    </div>
                  ) : (
                    <Badge
                      text={"bg-red-100"}
                      background={"text-red-800"}
                      content={`%${Math.round(
                        100 - ((price - discount) * 100) / price
                      )}`}
                    />
                  )}

                  <Link href={`/products/${id}`}>
                    <a>
                      <span className="mr-2 text-base md:text-xl">
                        ${Math.floor((price - discount) * 100) / 100}
                      </span>
                      <s className="text-slate-400">
                        ${Math.floor(price * 100) / 100}
                      </s>
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={`/products/${id}`}>
                  <a className="text-base md:text-xl">
                    ${Math.floor(price * 100) / 100}
                  </a>
                </Link>
              )}
            </div>
            {quantity <= 5 ? (
              <span className="text-red-300 dark:text-red-200">
                Only {quantity} left in stock.
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    case "menu":
      return (
        <div className="m-1 rounded-lg bg-white border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600 lg:w-72">
          <div className="bg-white rounded-t-lg p-2 flex justify-center">
            <Link href={`/products/${id}`}>
              <a>
                <Image
                  className="rounded-t-lg"
                  src={image}
                  alt={title}
                  quality="100"
                  width={150}
                  height={150}
                  layout="fixed"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                />
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href={`/products/${id}`}>
              <a>
                <span
                  className="mb-2 text-base font-medium text-gray-900 dark:text-white hover:text-slate-400"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    lineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </span>
              </a>
            </Link>
            <ProductRating rate={rate} count={count} countHidden={"hidden"} />
            <div className="text-gray-900 dark:text-white pt-2">
              {hasDiscount ? (
                <div className="flex items-center">
                  {Math.round(100 - ((price - discount) * 100) / price) >=
                  40 ? (
                    <div className="flex flex-col">
                      <Badge
                        text={"bg-red-100"}
                        background={"text-red-800"}
                        content={`%${Math.round(
                          100 - ((price - discount) * 100) / price
                        )}`}
                      />
                      <span className="text-sm text-red-100">OFFER</span>
                    </div>
                  ) : (
                    <Badge
                      text={"bg-red-100"}
                      background={"text-red-800"}
                      content={`%${Math.round(
                        100 - ((price - discount) * 100) / price
                      )}`}
                    />
                  )}

                  <Link href={`/products/${id}`}>
                    <a>
                      <span className="mr-2 text-base md:text-xl">
                        ${Math.floor((price - discount) * 100) / 100}
                      </span>
                      <s className="text-slate-400">
                        ${Math.floor(price * 100) / 100}
                      </s>
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={`/products/${id}`}>
                  <a className="text-base md:text-xl">
                    ${Math.floor(price * 100) / 100}
                  </a>
                </Link>
              )}
            </div>
            {quantity <= 5 && (
              <span className="text-red-300 dark:text-red-200">
                Only {quantity} left in stock.
              </span>
            )}
          </div>
        </div>
      );
    case "offer":
      return (
        <div
          className="m-1 rounded-lg bg-white border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600 lg:w-72"
          style={{ minHeight: "22.5rem" }}
        >
          <div className="bg-white rounded-t-lg p-2 flex justify-center">
            <Link href={`/products/${id}`}>
              <a>
                <Image
                  className="rounded-t-lg"
                  src={image}
                  alt={title}
                  quality="100"
                  width={150}
                  height={150}
                  layout="fixed"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                />
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href={`/products/${id}`}>
              <a>
                <span
                  className="mb-2 text-base font-medium text-gray-900 dark:text-white hover:text-slate-400"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    lineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </span>
              </a>
            </Link>
            <ProductRating rate={rate} count={count} countHidden={"hidden"} />
            <div className="text-gray-900 dark:text-white pt-2">
              {hasDiscount ? (
                <div className="flex items-center">
                  {Math.round(100 - ((price - discount) * 100) / price) >=
                  40 ? (
                    <div className="flex flex-col">
                      <Badge
                        text={"bg-red-100"}
                        background={"text-red-800"}
                        content={`%${Math.round(
                          100 - ((price - discount) * 100) / price
                        )}`}
                      />
                      <span className="text-sm text-red-100">OFFER</span>
                    </div>
                  ) : (
                    <Badge
                      text={"bg-red-100"}
                      background={"text-red-800"}
                      content={`%${Math.round(
                        100 - ((price - discount) * 100) / price
                      )}`}
                    />
                  )}

                  <Link href={`/products/${id}`}>
                    <a>
                      <span className="mr-2 text-base md:text-xl">
                        ${Math.floor((price - discount) * 100) / 100}
                      </span>
                      <s className="text-slate-400">
                        ${Math.floor(price * 100) / 100}
                      </s>
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={`/products/${id}`}>
                  <a className="text-base md:text-xl">
                    ${Math.floor(price * 100) / 100}
                  </a>
                </Link>
              )}
            </div>
            {quantity <= 5 && (
              <span className="text-red-300 dark:text-red-200">
                Only {quantity} left in stock.
              </span>
            )}
          </div>
        </div>
      );
    default:
      break;
  }
}
