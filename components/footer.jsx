import Link from "next/link";
import React from "react";
import GetFooterYear from "../services/GetFooterYear";
import Logo from "../components/logo";

export default function footer() {
  return (
    <div className="pt-5 bg-white text-gray-900 dark:bg-gray-900 dark:text-white border-t">
      <div>
        <div className="flex w-full justify-between">
          <Logo />
          <button
            type="button"
            className="flex items-center py-1.5 px-3.5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              window.scroll({ top: 0, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
            Go To Top
          </button>
        </div>
        <div className="my-3 lg:my-5 justify-around grid grid-cols-2 lg:grid-cols-5 gap-4 mx-3">
          <div>
            <span className="font-semibold">Company</span>
            <ul className="flex flex-col mt-2">
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    About
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Help Center</span>
            <ul className="flex flex-col mt-2">
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Help!
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    FAQs
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Legal</span>
            <ul className="flex flex-col mt-2">
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-slate-500">
                    Terms Of Use
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Refund Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Status</span>
            <ul className="flex flex-col mt-2">
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Services Status
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Report A Problem
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Bug Bounty
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Customer Services</span>
            <ul className="flex flex-col mt-2">
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Order Tracking
                  </a>
                </Link>
              </li>
              <li className="my-1">
                <Link href="">
                  <a className="text-slate-500 hover:underline dark:text-gray-500">
                    Compliment
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-2/3 flex items-center justify-center">
          <div className="flex flex-col md:w-1/2">
            <span className="md:hidden ml-3 mb-2">Join The Newsletter</span>
            <div className="mx-2 flex items-center mb-3">
              <div className="relative w-full mr-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your email address..."
                  type="email"
                  name="member[email]"
                  id="member_email"
                  required=""
                />
              </div>
              <div>
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  name="member[subscribe]"
                  id="member_submit"
                />
              </div>
            </div>
          </div>
          <div className="hidden ml-2 md:flex flex-col md:w-1/2">
            <span className="capitalize">get latest updates</span>
            <p className="capitalize text-sm text-slate-500 dark:text-gray-500">
              to get fresh updates from our newsletter service, subscribe.
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 items-end bg-slate-300 text-gray-900 dark:bg-gray-800 dark:text-white">
        <div className="px-2 flex flex-col gap-2 w-full justify-between items-center">
          <span className="text-xs order-2 md:mr-auto">
            Made With <span className="text-red-600">❤</span> By{" "}
            <Link href="https://github.com/UNHOTOfficial">
              <a className="underline hover:no-underline">UNHOT</a>
            </Link>
            .
          </span>
          <div className="text-sm mx-auto order-1">
            © {GetFooterYear()} ShopUnion™. All Rights Reserved.
          </div>
          <ul className="flex order-2 md:ml-auto">
            <li className="mx-1">
              <Link href="/tw">
                <a aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/ig">
                <a aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/tw">
                <a aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/tw">
                <a aria-label="Telegram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
