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
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user ?? null);
    });
    return () => { listener?.subscription.unsubscribe(); };
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
    await supabase.auth.signOut();
    setUser(null);
    setMessage("Logged out.");
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
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gradient-to-b from-[#f8f5ef] to-white">
        <h1 className="text-4xl font-serif font-bold mb-6 text-amber-700 tracking-tight">Your Profile</h1>
        <div className="bg-white/90 rounded-2xl shadow-2xl border border-gray-100 p-10 w-full max-w-xl flex flex-col items-center">
          <div className="flex gap-4 mb-8">
            <button onClick={() => setProfileTab('account')} className={`px-6 py-2 rounded-full font-serif text-lg transition shadow-sm border ${profileTab === 'account' ? 'bg-amber-700 text-white border-amber-700' : 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-amber-50'}`}>Account Info</button>
            <button onClick={() => setProfileTab('orders')} className={`px-6 py-2 rounded-full font-serif text-lg transition shadow-sm border ${profileTab === 'orders' ? 'bg-amber-700 text-white border-amber-700' : 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-amber-50'}`}>My Orders</button>
          </div>
          {profileTab === 'account' && (
            <div className="w-full">
              {!editing ? (
                <>
                  <div className="mb-4 flex items-center gap-2"><UserIcon className="h-6 w-6 text-amber-700" /> <span className="font-bold text-lg">{user.email}</span></div>
                  <div className="mb-2 text-gray-700 flex items-center gap-2"><span className="font-semibold">Name:</span> {user.user_metadata?.name || <span className="italic text-gray-400">Not set</span>}</div>
                  <div className="mb-2 text-gray-700 flex items-center gap-2"><DevicePhoneMobileIcon className="h-5 w-5 text-amber-700" /> {user.user_metadata?.phone || <span className="italic text-gray-400">Not set</span>}</div>
                  <button onClick={startEdit} className="mt-4 bg-amber-700 hover:bg-amber-800 text-white py-2 px-8 rounded-full font-serif text-lg shadow transition flex items-center gap-2"><PencilIcon className="h-5 w-5" /> Edit</button>
                  {editMessage && <div className="mt-2 text-green-700 font-medium">{editMessage}</div>}
                </>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <input type="text" value={editName} onChange={e => setEditName(e.target.value)} className="peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition" placeholder=" " />
                    <label className="absolute left-2 top-3 text-gray-500 text-base transition-all bg-white px-1">Name</label>
                  </div>
                  <div className="relative">
                    <input type="tel" value={editPhone} onChange={e => setEditPhone(e.target.value)} className="peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition" placeholder=" " />
                    <label className="absolute left-2 top-3 text-gray-500 text-base transition-all bg-white px-1">Phone Number</label>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <button onClick={saveEdit} className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-8 rounded-full font-serif text-lg shadow transition flex items-center gap-2"><ArrowPathIcon className="h-5 w-5" /> Save</button>
                    <button onClick={cancelEdit} className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-8 rounded-full font-serif text-lg shadow transition">Cancel</button>
                  </div>
                  {editMessage && <div className="mt-2 text-green-700 font-medium">{editMessage}</div>}
                </div>
              )}
              <button onClick={handleLogout} className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-8 rounded-full mt-8 font-serif text-lg shadow transition">Logout</button>
            </div>
          )}
          {profileTab === 'orders' && (
            <div className="w-full">
              <h2 className="text-2xl font-serif font-semibold mb-4 text-amber-700">Order History</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-3 font-semibold">Order ID</th>
                    <th className="py-2 px-3 font-semibold">Date</th>
                    <th className="py-2 px-3 font-semibold">Status</th>
                    <th className="py-2 px-3 font-semibold">Total</th>
                    <th className="py-2 px-3 font-semibold">Items</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-b">
                      <td className="py-2 px-3">{order.id}</td>
                      <td className="py-2 px-3">{order.date}</td>
                      <td className="py-2 px-3">{order.status}</td>
                      <td className="py-2 px-3">{order.total}</td>
                      <td className="py-2 px-3">{order.items.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gradient-to-b from-[#f8f5ef] to-white">
      {showToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-lg animate-fade-in-out">
          Registration successful! Check your email for confirmation.
        </div>
      )}
      <h1 className="text-4xl font-serif font-bold mb-8 text-amber-700 tracking-tight">Account</h1>
      <div className="bg-white/90 rounded-2xl shadow-2xl border border-gray-100 p-10 w-full max-w-md">
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => setView("login")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif text-lg transition shadow-sm border ${view === "login" ? "bg-amber-700 text-white border-amber-700" : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-amber-50"}`}>Login</button>
          <button onClick={() => setView("register")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif text-lg transition shadow-sm border ${view === "register" ? "bg-amber-700 text-white border-amber-700" : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-amber-50"}`}>Register</button>
        </div>
        {view === "login" && (
          <>
            <div className="flex justify-center gap-4 mb-6">
              <button onClick={() => setLoginMethod("password")}
                className={`flex items-center gap-2 px-3 py-1 rounded font-serif text-base transition border ${loginMethod === "password" ? "bg-amber-700 text-white border-amber-700" : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-amber-50"}`}
              >
                <KeyIcon className="h-5 w-5" /> Password
              </button>
              <button onClick={() => setLoginMethod("otp")}
                className={`flex items-center gap-2 px-3 py-1 rounded font-serif text-base transition border ${loginMethod === "otp" ? "bg-amber-700 text-white border-amber-700" : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-amber-50"}`}
              >
                <EnvelopeIcon className="h-5 w-5" /> OTP to Email
              </button>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-6">
              <div className="relative">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  className="peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition placeholder-transparent" placeholder=" " />
                <label className="absolute left-2 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-amber-700 peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-amber-700 bg-white px-1">Email</label>
              </div>
              {loginMethod === "password" && (
                <div className="relative">
                  <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                    className="peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition placeholder-transparent" placeholder=" " />
                  <label className="absolute left-2 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-amber-700 peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-amber-700 bg-white px-1">Password</label>
                </div>
              )}
              <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-full font-serif text-lg shadow transition w-full mt-2">Login</button>
            </form>
          </>
        )}
        {view === "register" && (
          <form onSubmit={handleRegister} className="flex flex-col gap-6">
            <div className="relative">
              <input type="text" required value={name} onChange={e => setName(e.target.value)}
                className={`peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition placeholder-transparent ${errors.name ? 'border-red-500' : ''}`}
                placeholder=" " />
              <label className="absolute left-2 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-amber-700 peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-amber-700 bg-white px-1">Name</label>
              {errors.name && <span className="text-red-500 text-xs absolute left-2 -bottom-5">{errors.name}</span>}
            </div>
            <div className={`relative ${errors.phone ? 'mb-6' : ''}`}>
              <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)}
                className={`peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition placeholder-transparent ${errors.phone ? 'border-red-500' : ''}`}
                placeholder=" " />
              <label className="absolute left-2 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-amber-700 peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-amber-700 bg-white px-1">Phone Number</label>
              {errors.phone && <span className="text-red-500 text-xs absolute left-2 -bottom-5">{errors.phone}</span>}
            </div>
            <div className="relative">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className={`peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition placeholder-transparent ${errors.email ? 'border-red-500' : ''}`}
                placeholder=" " />
              <label className="absolute left-2 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-amber-700 peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-amber-700 bg-white px-1">Email</label>
              {errors.email && <span className="text-red-500 text-xs absolute left-2 -bottom-5">{errors.email}</span>}
            </div>
            <div className="relative">
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                className={`peer border-b-2 border-gray-300 focus:border-amber-700 bg-transparent w-full py-3 px-2 text-lg focus:outline-none transition placeholder-transparent ${errors.password ? 'border-red-500' : ''}`}
                placeholder=" " />
              <label className="absolute left-2 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-amber-700 peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-amber-700 bg-white px-1">Password</label>
              {errors.password && <span className="text-red-500 text-xs absolute left-2 -bottom-5">{errors.password}</span>}
            </div>
            <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-full font-serif text-lg shadow transition w-full mt-2">Register</button>
          </form>
        )}
        {message && <div className="mt-6 text-center text-amber-700 font-medium">{message}</div>}
      </div>
    </main>
  );
} 