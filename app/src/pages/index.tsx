import type { GetServerSideProps, NextPage } from "next";

import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <main id="main-content" tabIndex="-1">
        <h1>In-Person Identity Proofing</h1>

        <Link href="/intake">
          <button type="button" className="usa-button">
            Intake application
          </button>
        </Link>
      </main>
    </>
  );
};

// Change this to getStaticProps if you're not using server-side rendering
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? "en-US");
  return { props: { ...translations } };
};

export default Home;
