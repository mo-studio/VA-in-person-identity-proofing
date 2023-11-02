import Link from "next/link";

export default function Intake() {
  return (
    <div className="page">
      <div className="container">
        <h1>In-person Identity Verification</h1>
        <div className="text">
          <p>
            You can verify your identity in-person at a participating VA Medical
            Center.
          </p>
          <p>You will need to bring following items with you:</p>
          <ol>
            <li>
              <b> Your VHIC or state-issued ID</b>
            </li>
            <li>
              <b> Confirmation Case number</b>
            </li>
          </ol>
          <div className="wrapper button-wrapper">
            <Link href="/intake/select-site">
              <button type="button" className="usa-button">
                Continue
              </button>
            </Link>
          </div>
          <p>
            If you decide not to verify your identity in-person, you may close
            this window at any time.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
