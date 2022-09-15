import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-gray-900">
        <Main />
        <NextScript />
        {/* Flowbite Js */}
        <Script
          src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
