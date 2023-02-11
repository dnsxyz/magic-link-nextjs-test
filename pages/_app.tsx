import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import App from "next/app";
import { ServerResponse } from "http";
import React from "react";
import "../styles/globals.css";

// if (typeof window !== "undefined") {
//   window.addEventListener("load", () => {
//     const clientCookie = getCookie("user", undefined);
//     const data = JSON.parse(clientCookie || "null");
//     console.log("client side: setting user:", data);
//   });
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Magic Link Next.JS Test</title>
      </Head>
      <div>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;

// function getCookie(key: string, res: ServerResponse | undefined) {
//   let cookieSrc: string | undefined;
//   if (typeof document !== "undefined") {
//     cookieSrc = document.cookie;
//   }
//   if (res) {
//     const header = res.getHeader("Set-Cookie");
//     if (Array.isArray(header)) {
//       cookieSrc = header.join("; ");
//     } else {
//       cookieSrc = header?.toString();
//     }
//   }
//   if (!cookieSrc) {
//     return undefined;
//   }
//   const cookies = cookieSrc
//     .split(";")
//     .map((pair) => {
//       const trimmedPair = pair.trim();
//       return trimmedPair.split("=");
//     })
//     .reduce((acc, [key, value]) => {
//       acc[key] = value;
//       return acc;
//     }, {} as Record<string, string>);

//   return decodeURIComponent(cookies[key] || "null");
// }

// MyApp.getInitialProps = async (ctx: AppContext) => {
//   const clientCookie = getCookie("user", ctx.ctx.res);
//   const data = JSON.parse(clientCookie || "null");
//   console.log("app: setting user:", data);
//   return App.getInitialProps(ctx);
// };
