export default function ContactUs() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-serif font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="mb-4 text-gray-700 font-serif">We would love to hear from you! For any queries, feedback, or support, please email us at <a href='mailto:support@jewelsbyzariya.com' className='text-amber-700 underline'>support@jewelsbyzariya.com</a> or fill out our contact form below.</p>
      <form className="flex flex-col gap-4 mt-6">
        <input type="text" placeholder="Your Name" className="border border-gray-300 rounded px-4 py-2 font-serif" />
        <input type="email" placeholder="Your Email" className="border border-gray-300 rounded px-4 py-2 font-serif" />
        <textarea placeholder="Your Message" className="border border-gray-300 rounded px-4 py-2 font-serif min-h-[120px]" />
        <button type="submit" className="bg-amber-700 text-white font-serif rounded-full px-6 py-2 mt-2 hover:bg-amber-800 transition">Send Message</button>
      </form>
    </main>
  );
} 