import { createShiprocketOrder } from './shiprocket';

// Example checkout form and cart data
const checkoutForm = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '9999999999',
  address: '221B Baker Street',
  city: 'Mumbai',
  state: 'Maharashtra',
  pin: '400001',
  country: 'India',
  paymentMethod: 'Prepaid', // or 'COD'
};

const cart = [
  { name: 'Gold Ring', sku: 'SKU123', qty: 1, price: 1500, discount: 0, tax: 0, hsn: '7113' },
  { name: 'Silver Chain', sku: 'SKU456', qty: 2, price: 800, discount: 0, tax: 0, hsn: '7113' },
];

function buildShiprocketOrderPayload({ checkoutForm, cart, orderId, pickupLocation }: any) {
  return {
    order_id: orderId,
    order_date: new Date().toISOString().slice(0, 10),
    pickup_location: pickupLocation,
    channel_id: '', // leave blank or use your channel ID
    billing_customer_name: checkoutForm.firstName,
    billing_last_name: checkoutForm.lastName,
    billing_address: checkoutForm.address,
    billing_city: checkoutForm.city,
    billing_pincode: checkoutForm.pin,
    billing_state: checkoutForm.state,
    billing_country: checkoutForm.country,
    billing_email: checkoutForm.email,
    billing_phone: checkoutForm.phone,
    shipping_is_billing: true,
    order_items: cart.map((item: any) => ({
      name: item.name,
      sku: item.sku,
      units: item.qty,
      selling_price: item.price,
      discount: item.discount || 0,
      tax: item.tax || 0,
      hsn: item.hsn || '',
    })),
    payment_method: checkoutForm.paymentMethod,
    shipping_charges: 0,
    giftwrap_charges: 0,
    transaction_charges: 0,
    total_discount: 0,
    sub_total: cart.reduce((sum: number, item: any) => sum + item.price * item.qty, 0),
    length: 10,
    breadth: 10,
    height: 10,
    weight: 0.5,
  };
}

// Example function to run and test order creation
export async function testCreateShiprocketOrder() {
  const orderId = 'ORDER' + Date.now();
  const pickupLocation = 'Zariya Mumbai'; // Replace with your actual pickup location name
  const orderPayload = buildShiprocketOrderPayload({
    checkoutForm,
    cart,
    orderId,
    pickupLocation,
  });
  try {
    const shiprocketOrder = await createShiprocketOrder(orderPayload);
    console.log('Shiprocket order created:', shiprocketOrder);
    // Save shiprocketOrder.shipment_id or order_id in your DB for tracking
  } catch (err) {
    console.error('Shiprocket order error:', err);
  }
} 