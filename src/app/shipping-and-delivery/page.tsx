export default function ShippingAndDelivery() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-serif font-bold mb-6 text-gray-900">Shipping and Delivery</h1>
      <ul className="mb-4 text-gray-700 font-serif list-disc pl-6">
        <li>We offer free shipping on all orders above ₹500. Shipping rates for other orders are calculated at checkout based on your location.</li>
        <li>Orders are processed within 2-5 business days. Each piece is handmade and may require additional time during busy periods.</li>
        <li>Once shipped, you will receive a tracking link via email. Delivery typically takes 5-7 business days after dispatch.</li>
        <li>International orders may be subject to customs duties and taxes, which are the responsibility of the buyer.</li>
        <li>If you have not received your order within the estimated delivery time, please contact us at <a href="mailto:support@jewelsbyzariya.com" className="text-amber-700 underline">support@jewelsbyzariya.com</a>.</li>
      </ul>
      <p className="mb-4 text-gray-700 font-serif">We reserve the right to update this policy at any time. Please review this page for the latest information.</p>
    </main>
  );
} 