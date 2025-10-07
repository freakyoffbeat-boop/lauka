export const metadata = { title: "Shipping & Returns Policy" };
export default function ShippingReturns(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose">
      <h1>Shipping & Returns Policy</h1>
      <h3>Shipping</h3>
      <ul>
        <li>Orders ship within 24–48 hours (business days).</li>
        <li>Delivery across India in 2–7 days.</li>
        <li>Tracking details sent via email/WhatsApp.</li>
      </ul>
      <h3>Returns</h3>
      <ul>
        <li>30-day return window from delivery date.</li>
        <li>Items must be unused and in original packaging.</li>
        <li>Refunds processed within 5–7 business days after inspection.</li>
      </ul>
      <p>For help, visit <a href="/support">Customer Support</a> or chat on WhatsApp.</p>
    </main>
  );
}
