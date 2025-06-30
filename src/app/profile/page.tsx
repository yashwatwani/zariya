"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import { UserIcon, KeyIcon, EnvelopeIcon, DevicePhoneMobileIcon, PencilIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const [view, setView] = useState<"login" | "register">("login");
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; password?: string }>({});
  const [showToast, setShowToast] = useState(false);
  const [profileTab, setProfileTab] = useState<'account' | 'orders'>('account');
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editMessage, setEditMessage] = useState<string | null>(null);

  // Mock orders data
  const orders = [
    {
      id: "ORD123456",
      date: "2024-06-01",
      status: "Delivered",
      total: "₹2,450",
      items: ["Emerald Radiance Ring"],
    },
    {
      id: "ORD123457",
      date: "2024-05-15",
      status: "Shipped",
      total: "₹1,980",
      items: ["Celestial Diamond Pendant"],
    },
  ];

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error('Error getting user:', error);
          // If there's an auth error, clear the session
          if (error.message.includes('Invalid Refresh Token') || error.message.includes('Refresh Token Not Found')) {
            await supabase.auth.signOut();
            setUser(null);
          }
        } else {
          setUser(user);
        }
      } catch (err) {
        console.error('Error in getUser:', err);
        setUser(null);
      }
    };

    getUser();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      
      if (event === 'SIGNED_OUT') {
        setUser(null);
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setUser(session?.user ?? null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Email + Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (loginMethod === "password") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else {
        setMessage("Logged in! Redirecting...");
        // Refetch user to get latest confirmation status
        const { data } = await supabase.auth.getUser();
        setUser(data.user);
      }
    } else {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) setMessage(error.message);
      else setMessage("OTP sent! Check your email.");
    }
  };

  // Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    let valid = true;
    const newErrors: typeof errors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
      valid = false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }
    setErrors(newErrors);
    if (!valid) return;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
        },
      },
    });
    if (error) setMessage(error.message);
    else {
      setMessage("Registration successful! Check your email for confirmation.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
        setMessage('Error logging out. Please try again.');
      } else {
        setUser(null);
        setMessage('Logged out successfully.');
      }
    } catch (err) {
      console.error('Logout error:', err);
      setMessage('Error logging out. Please try again.');
    }
  };

  // Edit profile handlers
  const startEdit = () => {
    setEditName(user?.user_metadata?.name || "");
    setEditPhone(user?.user_metadata?.phone || "");
    setEditing(true);
    setEditMessage(null);
  };
  const cancelEdit = () => setEditing(false);
  const saveEdit = async () => {
    // Update user metadata in Supabase
    const { error } = await supabase.auth.updateUser({
      data: { name: editName, phone: editPhone },
    });
    if (error) setEditMessage(error.message);
    else {
      setEditMessage("Profile updated!");
      setEditing(false);
      // Refetch user
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
  };

  if (user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 bg-[#f8f5ef]">
        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl p-10 flex flex-col items-center">
          <h1 className="text-3xl font-serif font-bold mb-8 text-gray-900">Your Profile</h1>
          <div className="flex w-full mb-8">
            <button
              className={`flex-1 py-2 rounded-l-full font-serif text-lg font-bold transition border ${profileTab === 'account' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setProfileTab('account')}
            >
              Account Info
            </button>
            <button
              className={`flex-1 py-2 rounded-r-full font-serif text-lg font-bold transition border-l-0 border ${profileTab === 'orders' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setProfileTab('orders')}
            >
              My Orders
            </button>
          </div>
          {profileTab === 'account' && (
            <div className="w-full flex flex-col gap-4">
              <div className="text-lg font-semibold text-gray-800">Email:</div>
              <div className="text-base text-gray-600 mb-2">{user.email}</div>
              <div className="text-lg font-semibold text-gray-800">Name:</div>
              <div className="text-base text-gray-600 mb-2">{user.user_metadata?.name || <span className="italic text-gray-400">Not set</span>}</div>
              <div className="text-lg font-semibold text-gray-800">Phone:</div>
              <div className="text-base text-gray-600">{user.user_metadata?.phone || <span className="italic text-gray-400">Not set</span>}</div>
              <button className="mt-6 w-full bg-black text-white font-bold text-lg py-3 rounded transition hover:bg-gray-900">Edit</button>
              <button 
                onClick={handleLogout}
                className="w-full border border-black text-black font-semibold text-lg py-2 rounded transition hover:bg-gray-100 mt-2"
              >
                Logout
              </button>
              {message && <div className="text-sm text-center mt-2 text-gray-600">{message}</div>}
            </div>
          )}
          {profileTab === 'orders' && (
            <div className="w-full flex flex-col items-center">
              <h2 className="text-3xl font-serif font-extrabold mb-8 text-amber-800 tracking-tight">Order History</h2>
              {orders.length === 0 ? (
                <div className="text-gray-400 text-lg italic py-12">You have not placed any orders yet.</div>
              ) : (
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-separate border-spacing-y-3">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 font-bold text-gray-700 text-base">Order ID</th>
                        <th className="py-3 px-4 font-bold text-gray-700 text-base">Date</th>
                        <th className="py-3 px-4 font-bold text-gray-700 text-base">Status</th>
                        <th className="py-3 px-4 font-bold text-gray-700 text-base">Total</th>
                        <th className="py-3 px-4 font-bold text-gray-700 text-base">Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id} className="bg-white shadow-sm rounded-xl transition hover:bg-amber-50">
                          <td className="py-3 px-4 font-mono text-sm rounded-l-xl">{order.id}</td>
                          <td className="py-3 px-4 text-sm">{order.date}</td>
                          <td className="py-3 px-4 text-sm">
                            <span className={`px-3 py-1 rounded-full font-semibold text-xs ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'}`}>{order.status}</span>
                          </td>
                          <td className="py-3 px-4 text-sm">{order.total}</td>
                          <td className="py-3 px-4 text-sm rounded-r-xl">{order.items.join(", ")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 bg-[#f8f5ef]">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl p-10 flex flex-col items-center">
        <h1 className="text-3xl font-serif font-bold mb-8 text-gray-900">{view === 'register' ? 'Register' : 'Log In'}</h1>
        <form onSubmit={view === 'register' ? handleRegister : handleLogin} className="w-full flex flex-col gap-4">
          {view === 'register' && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={name.split(' ')[0] || ''}
                onChange={e => setName(e.target.value + (name.includes(' ') ? ' ' + name.split(' ').slice(1).join(' ') : ''))}
                className="w-full border border-gray-200 rounded px-4 py-3 text-lg focus:border-black outline-none"
                autoComplete="given-name"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={name.split(' ').slice(1).join(' ')}
                onChange={e => setName((name.split(' ')[0] || '') + ' ' + e.target.value)}
                className="w-full border border-gray-200 rounded px-4 py-3 text-lg focus:border-black outline-none"
                autoComplete="family-name"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded px-4 py-3 text-lg focus:border-black outline-none"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded px-4 py-3 text-lg focus:border-black outline-none"
            autoComplete={view === 'register' ? 'new-password' : 'current-password'}
          />
          {view === 'register' && (
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded px-4 py-3 text-lg focus:border-black outline-none"
              autoComplete="tel"
            />
          )}
          {view === 'register' && (
            <div className="text-xs text-gray-500 mb-2 mt-1">
              Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
            </div>
          )}
          {message && <div className="text-red-600 text-sm mb-2">{message}</div>}
          <button
            type="submit"
            className="w-full bg-black text-white font-bold text-lg py-3 rounded transition hover:bg-gray-900 mb-2"
          >
            {view === 'register' ? 'REGISTER' : 'SIGN IN'}
          </button>
        </form>
        <div className="w-full flex flex-col gap-2 mt-4">
          {view === 'register' ? (
            <button
              onClick={() => setView('login')}
              className="w-full border border-black text-black font-semibold text-lg py-2 rounded transition hover:bg-gray-100"
            >
              Log In
            </button>
          ) : (
            <>
              <button
                onClick={() => setView('register')}
                className="w-full border border-black text-black font-semibold text-lg py-2 rounded transition hover:bg-gray-100"
              >
                Register
              </button>
              <div className="text-xs text-gray-500 mt-2">
                New customer? Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
} 