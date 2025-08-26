'use client';

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ stops page refresh

    if (name && email && message) {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;


      const templateParams = {
        name,
        subject,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailSent(true);
        })
        .catch((error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        });

      // reset fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-16 xl:px-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Text */}
          <div className="text-left">
            <p className="text-2xl font-semibold text-gray-900">
              Send us your requests or inquiries and we will get back to you within 24 hours.
            </p>
          </div>

          {/* RIGHT: Form */}
          <form onSubmit={submit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-md bg-[#005499] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Submit
            </button>
            {emailSent && (
              <span className="text-green-600 font-medium block">
                Thank you for your message, we will be in touch in no time!
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
