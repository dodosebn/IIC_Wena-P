'use client';

import React, { useEffect, useState } from 'react';
import { FaGlobe, FaXTwitter } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import TransitionLink from './transitionLink';

const Shar = () => {
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    const title = encodeURIComponent("Check out this awesome post!");
    const url = encodeURIComponent(window.location.href);
    setShareMessage(`${title} ${url}`);
  }, []);

  return (
    <div className="mb-20 py-8 border-t border-b border-gray-200">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Share this story</p>
        <div className="flex flex-wrap gap-4">
          {/* Email */}
          <a
            href={`mailto:?subject=Check this out!&body=${shareMessage}`}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <IoMail className="text-gray-700" />
            <span className="text-gray-700">Email</span>
          </a>

          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <FaXTwitter className="text-gray-700" />
            <span className="text-gray-700">Twitter</span>
          </a>

          {/* Visit Website */}
          <TransitionLink href="/">
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <FaGlobe className="text-gray-700" />
              <span className="text-gray-700">Visit website</span>
            </span>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};

export default Shar;
