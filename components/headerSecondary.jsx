import Link from "next/link";
import React from "react";

export default function HeaderSecondary() {
  return (
    <nav className="bg-slate-300 border-gray-200 px-4 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex items-center text-gray-900 dark:text-white">
        <ul className="flex w-2/3 md:w-1/3 xl:w-1/4 justify-between">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/offers">Offers</Link>
            </li>
            <li className="hover:underline">
              <Link href="/popular">Popular</Link>
            </li>
        </ul>
        <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
      </div>
    </nav>
  );
}
