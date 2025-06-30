import { supabase } from './supabaseClient';

// Helper to get IP address
async function getIp() {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch {
    return null;
  }
}

// Helper to get Supabase user
async function getUserId() {
  const { data } = await supabase.auth.getUser();
  return data.user ? data.user.id : null;
}

// Main function to log event
export async function logUserEvent(eventType: string, details: Record<string, any> = {}) {
  const deviceInfo = navigator.userAgent;
  const browser = navigator.userAgent; // You can use a parser for more detail
  const domain = window.location.hostname;
  const page = window.location.pathname;
  const connection = (navigator as any).connection?.effectiveType || null;

  // Get IP and user ID in parallel
  const [ip, user_id] = await Promise.all([getIp(), getUserId()]);

  // Get location (optional, may require user permission)
  let location_lat = null, location_lng = null;
  if (navigator.geolocation) {
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 2000 })
      );
      location_lat = pos.coords.latitude;
      location_lng = pos.coords.longitude;
    } catch {
      // User denied or unavailable
    }
  }

  // Insert into Supabase
  const { error } = await supabase.from('user_events').insert([{
    user_id,
    event_type: eventType,
    page,
    device_info: deviceInfo,
    browser,
    ip,
    location_lat,
    location_lng,
    connection_type: connection,
    domain,
    details,
  }]);
  if (error) {
    console.error('Failed to log user event:', error);
  }
} 