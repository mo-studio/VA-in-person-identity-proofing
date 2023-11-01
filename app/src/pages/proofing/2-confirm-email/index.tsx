import Link from "next/link";

export default function ConfirmEmailPage() {
  return (
    <div className="page">
      <div className="container">
        <h1>Confirm applicant email</h1>

        <Link href="/proofing/3-validate-id">
          <button type="button" className="usa-button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
