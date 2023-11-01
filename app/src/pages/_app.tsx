import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocationContextProvider } from "../contexts/LocationContext";


import Layout from "../components/Layout";
import "../assets/stylesheets/styles.scss";
import "../assets/stylesheets/intake.scss";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/logo.svg`}
        />
      </Head>

      <LocationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocationContextProvider>

    </>
  );
}

export default appWithTranslation(MyApp);
