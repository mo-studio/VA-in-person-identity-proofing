import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import { Grid, GridContainer } from "@trussworks/react-uswds";

import SvgAccountBox from "../components/icons/AccountBox";
import SvgEvent from "../components/icons/Event";

const svgStyle = {
  width: 50,
  height: 50,
  fill: "white",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>In-Person Identity Proofing</title>
      </Head>

      <main id="main-content" tabIndex={-1}>
        <GridContainer>
          <Grid row>
            <Grid tablet={{ col: true }}>
              <div className="usa-section">
                <h1 className="padding-left-0">In-Person Identity Proofing</h1>
                <p>v0.1.0</p>
              </div>
            </Grid>
          </Grid>

          <Grid row>
            <Grid tablet={{ col: true }}>
              <Link href="/intake/1-home">
                <button type="button" className="usa-button">
                  <Grid row className="flex-justify-center">
                    <SvgEvent viewBox="0 0 25 25" style={svgStyle} />
                  </Grid>
                  <Grid row>
                    <h2>Intake application</h2>
                  </Grid>
                </button>
              </Link>
            </Grid>
            <Grid tablet={{ col: true }}>
              <Link href="/proofing/1a-case-number">
                <button type="button" className="usa-button">
                  <Grid row className="flex-justify-center">
                    <SvgAccountBox viewBox="0 0 25 25" style={svgStyle} />
                  </Grid>
                  <Grid row>
                    <h2>Proofing agent</h2>
                  </Grid>
                </button>
              </Link>
            </Grid>
          </Grid>
        </GridContainer>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? "en-US");
  return { props: { ...translations } };
};

export default Home;
