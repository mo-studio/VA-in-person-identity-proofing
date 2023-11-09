import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";
import { IntakeContextProvider } from "../contexts/IntakeContext";
import { ProofingContextProvider } from "../contexts/ProofingContext";

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

      <IntakeContextProvider>
        <ProofingContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProofingContextProvider>
      </IntakeContextProvider>
    </>
  );
}

export default MyApp;
