import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "site/sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));
export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        {/* Preload Second Font */}
        <link
          rel="preload"
          href={asset("/fonts/Bison-Bold.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="false"
        />

        {/* Local Second Font */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* latin */
            @font-face {
              font-family: 'Bison';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(${asset("/fonts/Bison-Bold.woff2")}) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            body {
              background: var(--bg-page, #fff);
            }
            `,
          }}
        />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />

      {/* Include service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
});
