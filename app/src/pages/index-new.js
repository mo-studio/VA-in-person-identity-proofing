import Head from "next/head";
import Link from "next/link";

export default function Home() {
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
    </div>
  );
}
