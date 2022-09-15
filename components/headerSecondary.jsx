import Link from "next/link";
import React from "react";

export default function HeaderSecondary() {
  return (
    <nav  className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
<div className="container flex flex-wrap items-center">
<ul className="text-gray-900 flex w-1/2 justify-between hover dark:text-white">
  <li className="hover:underline"><Link href="/">Home</Link></li>
  <li className="hover:underline"><Link href="/offers">Offers</Link></li>
  <li className="hover:underline"><Link href="/popular">Popular</Link></li>
</ul>
</div>
    </nav>
  );
}
