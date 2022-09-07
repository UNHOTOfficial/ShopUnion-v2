import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  image,
  title,
  description,
  id,
  hasDiscount,
  price,
  discount,
}) {
  return (
    <div className="w-72 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={id}>
        <a>
          <Image
            src={image}
            alt={title}
            quality="100"
            width={100}
            height={100}
            layout="responsive"
          />
        </a>
      </Link>
      <div className="p-5">
        <Link href={id}>
          <a>
            <h6
              className="mb-2 font-bold text-gray-900 dark:text-white"
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
            </h6>
          </a>
        </Link>
        <div className="text-gray-900 dark:text-white">
          {hasDiscount ? (
            <div className="flex justify-between items-center">
              <div>
                <span className="mr-2">
                  ${Math.floor((price - discount) * 100) / 100}
                </span>
                <s className="text-gray-500">
                  ${Math.floor(price * 100) / 100}
                </s>
              </div>
              <div className="flex flex-col">
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl dark:bg-red-200 dark:text-red-900">
                  %{Math.round(100 - ((price - discount) * 100) / price)}
                </span>
                {Math.round(100 - ((price - discount) * 100) / price) > 40 ? (
                  <span className="text-sm uppercase text-red-200">offer</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <span>${Math.floor(price * 100) / 100}</span>
          )}
        </div>
      </div>
    </div>
  );
}
