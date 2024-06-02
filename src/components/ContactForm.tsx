// ContactForm.tsx

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can implement the logic to send the email
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields after submission
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-2">
      <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Contact Me
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
        Do you have an exciting project, want to hire me, or maybe just chat? Feel free to leave your email down
        below!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <textarea
          placeholder="Your Message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2"
          rows={4}
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Send Email
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
