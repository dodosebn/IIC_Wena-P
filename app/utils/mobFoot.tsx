'use client';

import React, { useState, useEffect } from 'react';
import { AiFillTikTok } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

const MobFoot = () => {
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    setShareMessage(encodeURIComponent(`Hey! Check this out: ${currentUrl}`));
  }, []);

  return (
    <div className="flex gap-3 mx-auto justify-center md:hidden h-[4rem]">
      <div className="flex items-center pt-2">
        <p className="text-sm text-gray-700 mb-2">SHARE THIS:</p>
      </div>

      <div className="flex items-center h-full">
        <a
          href={`https://www.instagram.com/sharer/sharer.php?u=${shareMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex justify-center items-center"
        >
          <FaInstagram size={35} />
        </a>

        <div className="h-full border-l border-gray-300/20 mx-3" />

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex justify-center items-center"
        >
          <AiFillTikTok size={35} />
        </a>

        <div className="h-full border-l  border-gray-300/20 mx-3" />

        <a
          href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex justify-center items-center"
        >
          <FaSquareXTwitter size={35} />
        </a>

        <div className="h-full border-l  border-gray-300/20 mx-3" />

        <a
          href={`mailto:?subject=Check this out!&body=${shareMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex justify-center items-center"
        >
          <IoMail size={35} />
        </a>
      </div>
    </div>
  );
};

export default MobFoot;
