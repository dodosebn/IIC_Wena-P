'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Formalin = () => {
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderName,
          receiverName,
          receiverEmail,
          url: window.location.href,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Email sent!');
        setSenderName('');
        setReceiverName('');
        setReceiverEmail('');
      } else {
        toast.error(data?.error?.message || 'Failed to send email.');
      }
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8 md:p-12">
      <Toaster position="top-right" />
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 text-center">
        SHARE WITH A FRIEND OR LOVED ONE
      </h3>
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Sender's name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <input
            type="text"
            name="receiverName"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            placeholder="Receiver's name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="receiverEmail"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            placeholder="Receiver's email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Formalin;
