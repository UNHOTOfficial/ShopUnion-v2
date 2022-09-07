import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-gray-900">
        <Main />
        <NextScript />
        {/* <Script src="https://tailwindui.com/js/alpine.js?id=aec657470ad97cbba5c2659fd719c2de" strategy="beforeInteractive"></Script> */}
      </body>
    </Html>
  );
}
