import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

export default function CaseNumberScreen() {
  Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
  };
  let currentDate = new Date();
  let date = currentDate.addDays(10).toLocaleDateString();

  return (
    <div className="page">
      <div className="container">
        <div className="white-box">
          <br />
          <StepIndicator counters="small" headingLevel="h4">
            <StepIndicatorStep label="Home" status="complete" />
            <StepIndicatorStep label="Select site" status="complete" />
            <StepIndicatorStep label="Confirm site" status="complete" />
            <StepIndicatorStep label="Verify in-person" status="current" />
          </StepIndicator>
          <h1>Verify In Person</h1>
          <div className="text">
            <p>
              <b>Your case number is: C8302023</b>
            </p>
            <p>
              For your In-Person Identity Proofing walk-in appointment, please
              bring the following items:
            </p>
            <ol>
              <li>Your case number</li>
              <li>
                Your social security number (you only need to know your number;
                you do not need to bring in your physical card)
              </li>
              <li>
                Your state-issued ID or your Veteran Health Insurance Card
                (VHIC)
              </li>
              <li>
                Proof of your current address if you plan on presenting your
                VHIC
              </li>
            </ol>
            <p>
              Remember that your case number will expire in 10 days. Visit your
              participating VA Medical center by {date}.
            </p>
            <p>
              A copy of your case number and instructions on what to bring to
              the verification site you selected have been emailed to the
              address you provided.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
