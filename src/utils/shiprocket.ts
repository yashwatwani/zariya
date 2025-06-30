// src/utils/shiprocket.ts

const SHIPROCKET_EMAIL = process.env.NEXT_PUBLIC_SHIPROCKET_EMAIL || 'YOUR_API_USER_EMAIL';
const SHIPROCKET_PASSWORD = process.env.NEXT_PUBLIC_SHIPROCKET_PASSWORD || 'YOUR_API_USER_PASSWORD';

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

async function getShiprocketToken(): Promise<string> {
  // Use cached token if not expired
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }
  const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: SHIPROCKET_EMAIL,
      password: SHIPROCKET_PASSWORD,
    }),
  });
  const data = await res.json();
  if (!data.token) throw new Error('Shiprocket authentication failed');
  cachedToken = data.token;
  // Shiprocket tokens are valid for 10 minutes, so set expiry a bit earlier
  tokenExpiry = Date.now() + 8 * 60 * 1000;
  return cachedToken;
}

export async function createShiprocketOrder(orderPayload: any) {
  const token = await getShiprocketToken();
  const res = await fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(orderPayload),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to create Shiprocket order');
  }
  return data;
}