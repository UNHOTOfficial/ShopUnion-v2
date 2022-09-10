import Link from "next/link";
import React from "react";

export default function HeaderDeals() {
  return (
    <div className="text-gray-900 bg-gray-800 py-1 text-center capitalize text-sm font-thin dark:text-white">
      get up to 50% off on offer products.
      <Link href="/offers">
        <a className="underline ml-1 hover:no-underline">Offers</a>
      </Link>
    </div>
  );
}
