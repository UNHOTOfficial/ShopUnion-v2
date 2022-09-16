import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white border-t">
      <div className="grid grid-col-2 grid-flow-col">
        <div>
          <span className="font-semibold">Company</span>
          <ul className="flex flex-col mt-2">
            <li>
              <Link href="">
                <a className="text-slate-300 hover:text-slate-500 dark:text-slate-400">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="text-slate-300 hover:text-slate-500 dark:text-slate-400">
                  Careers
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="text-slate-300 hover:text-slate-500 dark:text-slate-400">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Help Center</span>
          <ul className="flex flex-col mt-2">
            <li>
              <Link href="">
                <a className="text-slate-300 hover:text-slate-500 dark:text-slate-400">
                  Help!
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="text-slate-300 hover:text-slate-500 dark:text-slate-400">
                  Bug Bounty
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="text-slate-300 hover:text-slate-500 dark:text-slate-400">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-300 text-gray-900 dark:bg-gray-800 dark:text-white">Copyright</div>
    </div>
  );
}
