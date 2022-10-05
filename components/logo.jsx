import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex">
        <Image
          src="/assest/logo/image.svg"
          width="50"
          height="50"
          alt="Logo"
          layout="fixed"
          // placeholder="blur"
          // blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          ShopUnion
        </span>
      </a>
    </Link>
  );
}
