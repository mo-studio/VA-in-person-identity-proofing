import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import {
  Grid,
  GridContainer,
  IconFunctionalComponent,
} from "@trussworks/react-uswds";

import SvgAccountBox from "../components/icons/AccountBox.js";
import SvgEvent from "../components/icons/Event.js";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>In-Person Identity Proofing</title>
      </Head>

      <main id="main-content" tabIndex="-1">
        <GridContainer>
          <Grid row>
            <Grid tablet={{ col: true }}>
              <h1 className="padding-left-0">In-Person Identity Proofing</h1>
            </Grid>
            <Grid col={12} offset={0}>
              <p>v0.1.0</p>
            </Grid>
          </Grid>
          <Grid row>
            <Grid>
              {" "}
              <br />{" "}
            </Grid>
          </Grid>

          <Grid row>
            <Grid tablet={{ col: true }}>
              <Link href="/intake">
                <button type="button" className="usa-button">
                  <Grid row className="flex-justify-center">
                    <SvgEvent
                      alt="Accessible by default"
                      viewBox="0 0 25 25"
                      style={{
                        width: 50,
                        height: 50,
                        fill: "white",
                        // stroke: "grey",
                        // strokeWidth: ".25px",
                        // backgroundColor: "rgb(0 113 188)",
                        // borderRadius: "50%",
                      }}
                    />
                  </Grid>
                  <Grid row>
                    <h3>Intake application</h3>
                  </Grid>
                </button>
              </Link>
            </Grid>
            <Grid tablet={{ col: true }}>
              <Link href="/proofing/1-case-number">
                <button type="button" className="usa-button">
                  <Grid row className="flex-justify-center">
                    <SvgAccountBox
                      alt="Accessible by default"
                      viewBox="0 0 25 25"
                      style={{
                        width: 50,
                        height: 50,
                        fill: "white",
                        // stroke: "grey",
                        // strokeWidth: ".25px",
                        // backgroundColor: "rgb(0 113 188)",
                        // borderRadius: "50%",
                      }}
                    />
                  </Grid>
                  <Grid row>
                    <h3>Proofing agent</h3>
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

// Change this to getStaticProps if you're not using server-side rendering
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? "en-US");
  return { props: { ...translations } };
};

export default Home;
