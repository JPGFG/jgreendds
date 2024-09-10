import "./Billing.css";

export default function Billing() {
  return (
    <div className="billingblock">
      <h1>Billing Policy, as of 2024.</h1>
      <p>
        Payment is expected at time of service. We accept cash, local checks,
        and credit cards. If for some reason you are unable to pay in full,
        please contact Cindy in our billing department at (518)587-8885, option
        2, prior to your appointment to set up a payment plan. You may also
        email Cindy.
      </p>
      <h2>Insurance</h2>
      <p>
        Your insurance company will have guidelines on how often they will pay
        for procedures such as x-rays, cleanings, and crowns. If you have not
        met their guidelines, you will be responsible for the service provided.
        There will also be guidelines stating what percentage of each procedure
        will be covered by your insurance. Not all procedures will be 100%
        covered. Unfortunately, each insurance policy has different guidelines.
        Even within the same insurance company, there may be differences in each
        policy. Therefore, in most cases, we cannot tell you what your
        individual insurance policy will cover. Please call the{" "}
        <strong>
          1-800 number on your insurance card to gather this information.
        </strong>
      </p>
    </div>
  );
}
