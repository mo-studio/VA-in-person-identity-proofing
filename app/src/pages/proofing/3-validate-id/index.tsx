import Link from "next/link";

export default function ConfirmEmailPage() {
  return (
    <div className="page">
      <div className="container">
        <h1>Validate ID</h1>
      </div>

      <Link href="/proofing/2-confirm-email">
        <button type="button" className="usa-button">
          Back
        </button>
      </Link>
    </div>
  );
}
