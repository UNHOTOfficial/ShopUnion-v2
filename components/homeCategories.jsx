import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function homeCategories({ categories }) {
  return (
    <div className="text-gray-900 flex justify-center md:justify-around py-6 dark:text-white dark:bg-gray-900">
      {categories.map((category) => (
        <Link href={`/products/${category.title}`} key={category.title}>
          <a>
            <div className="flex flex-col px-2">
              <Image
                className="rounded-full"
                src={category.url}
                alt={category.title}
                quality="100"
                width={80}
                height={80}
                layout="fixed"
                objectFit="cover"
                // placeholder="blur"
                // blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              />
              <span className="capitalize mt-1 text-center">{category.title}</span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
