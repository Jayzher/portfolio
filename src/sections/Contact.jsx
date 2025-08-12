import React from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col bg-primary">
      <div className="max-w-4xl mx-auto w-full px-6 py-16 flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6 text-center">Contact</h2>
        <p className="text-secondary text-center mb-10">Have a question or an opportunity? Send a message and I’ll get back to you.</p>
        <form className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
          <input className="w-full px-4 py-3 rounded-md bg-secondary text-primary border border-primary focus:outline-none" placeholder="Your Name" />
          <input className="w-full px-4 py-3 rounded-md bg-secondary text-primary border border-primary focus:outline-none" placeholder="Email Address" type="email" />
          <textarea className="w-full px-4 py-3 rounded-md bg-secondary text-primary border border-primary focus:outline-none" placeholder="Message" rows={5} />
          <button type="button" className="px-5 py-3 rounded-md bg-brand text-variant font-semibold hover:opacity-90 transition w-full md:w-auto">Send Message</button>
        </form>
        <div className="mt-10 text-center">
          <p className="text-secondary">Or email directly: <a href="mailto:you@example.com" className="text-brand underline">you@example.com</a></p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
