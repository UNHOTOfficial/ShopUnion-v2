import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMediaButtons from "../components/socialMediaButtons";

export default function signin() {
  return (
    <>
      <Head>
        <title>ShopUnion</title>
        <meta name="description" content="Sign In To Your ShopUnion Account." />
      </Head>
      <div className="bg-white dark:bg-gray-900">
        <form className="bg-transparent p-3 mx-auto md:w-1/2 lg:w-1/3 pt-12">
          <span className="mb-10 text-3xl font-bold hidden md:block text-gray-900 dark:text-white">
            Sign In
          </span>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 md:font-semibold text-gray-900 dark:text-gray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="name@flowbite.com"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 md:font-semibold text-gray-900 dark:text-gray-300"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required=""
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div className="flex mb-4 text-sm flex-col">
            <span className="text-gray-900 dark:text-gray-300">
              Do Not Have An Account?
              <Link href="/signup">
                <a className="text-blue-700"> Create One!</a>
              </Link>
            </span>
            <span className="text-gray-900 dark:text-gray-300">
              Need Help?
              <Link href="/help">
                <a className="text-blue-700"> Help Center</a>
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border"
          >
            Sign In
          </button>
        </form>
        <SocialMediaButtons action={"Sign In"} />
      </div>
    </>
  );
}
