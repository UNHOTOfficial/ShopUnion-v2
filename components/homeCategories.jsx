import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function homeCategories({ categories }) {
  return (
    <div className="text-gray-900 flex my-3 dark:text-white">
      {categories.map((category) => (
        <Link href={`/products/${category.title}`} key={category.title}>
          <a>
            <div className="flex flex-col px-2">
              <Image
                className="rounded-full"
                src={category.url}
                alt={category.title}
                quality="100"
                width={50}
                height={50}
                layout="fixed"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              />
              <span className="capitalize mt-1">{category.title}</span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
