export const metadata = { title: "Privacy & Security Policy" };
export default function PrivacySecurity(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose">
      <h1>Privacy & Security</h1>
      <p>We use SSL encryption and secure processors (Razorpay/Stripe). We never store payment card details.</p>
      <h3>Data</h3>
      <ul>
        <li>We collect basic info to fulfill your order and support.</li>
        <li>You can request deletion of your data anytime.</li>
      </ul>
      <h3>Cookies</h3>
      <p>Analytics and cart cookies improve your experience. You can opt out.</p>
    </main>
  );
}
