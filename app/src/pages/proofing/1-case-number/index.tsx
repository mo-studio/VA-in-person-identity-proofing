import Link from "next/link";

export default function CaseNumerPage() {
  return (
    <div className="page">
      <div className="container">
        <h1>Enter Case Number</h1>

        <Link href="/proofing/2-confirm-email">
          <button type="button" className="usa-button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
