import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <title>USWDS prototype template</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main-content" tabIndex="-1">
        <h1>In-Person Identity Proofing</h1>

        <Link href="/intake">
          <button type="button" className="usa-button">
            Intake application
          </button>
        </Link>
      </main>
      {/* <Script src="uswds/js/uswds.min.js" /> */}
    </div>
  );
}
