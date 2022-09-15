import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function homeCategories({ categories }) {
  return (
    <div className="text-gray-900 flex dark:text-white">
      {categories.map((category) => (
        <Link href={`/products/${category.title}`} key={category.title}>
          <a>
            <div className="flex flex-col items-center px-2">
              <Image
                className="rounded-full"
                src={category.url}
                alt={category.title}
                width="80"
                height="80"
                layout="fixed"
                quality="100"
              />
              <span className="capitalize mt-1">{category.title}</span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
