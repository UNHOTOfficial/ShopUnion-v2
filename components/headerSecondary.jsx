import Link from "next/link";
import React from "react";

export default function HeaderSecondary() {
  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap items-center">
        <ul className="text-gray-900 flex w-full justify-between md:w-1/4 dark:text-white">
          <div className="flex justify-between w-1/2">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/offers">Offers</Link>
            </li>
            <li className="hover:underline">
              <Link href="/popular">Popular</Link>
            </li>
          </div>
          <li className="hover:text-indigo-300">
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
