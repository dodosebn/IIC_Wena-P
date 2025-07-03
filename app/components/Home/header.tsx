import TransitionLink from '@/app/utils/transitionLink';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaAngleRight, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';

const Header = () => {
  return (
    <div className='bg-[#fff]'>
      {/* Outer wrapper with vertical padding */}
      <div className='py-7'>
        {/* Flex layout without vertical padding so line can stretch */}
        <div className='flex justify-between px-14'>
          <div className='flex flex-row space-x-5 items-stretch'>
            {/* Location Section */}
            <div className='flex space-x-2 items-center'>
              <div>
                <CiLocationOn className='text-[#f19383]' size={35} />
              </div>
              <div>
                <h1 className='text-[#002C5F] text-[15px] font-bold'>
                  Street 27, Londom
                </h1>
                <p className='text-[#002C5FCC] text-[13px]'>Visit Our site</p>
              </div>
            </div>

            {/* Full Height Divider */}
            <div className='border-l border-gray-400 self-stretch mx-4'></div>

            {/* Phone Section */}
            <div className='flex space-x-2 items-center'>
              <div>
                <LuPhoneCall className='text-[#f19383]' size={35} />
              </div>
              <div>
                <h1 className='text-[#002C5F] text-[15px] font-bold'>
                  Street 27, Londom
                </h1>
                <p className='text-[#002C5FCC] text-[13px]'>Visit Our site</p>
              </div>
            </div>
          </div>

          {/* Socials and Button */}
          <div className='flex justify-center items-center gap-7'>
            <div className='flex space-x-5'>
              <FaFacebook size={24} className='text-gray-400 hover:text-[#f19387]' />
              <IoLogoTwitter size={24} className='text-gray-400 hover:text-[#f19387]' />
              <FaYoutube size={24} className='text-gray-400 hover:text-[#f19387]' />
            </div>

            <div>
              <button
                className='bg-[#B23E3E] gap-4 flex items-center text-white font-bold px-5 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 group'
              >
                <TransitionLink href='/Features'>
                  <div className='relative h-6 overflow-hidden'>
                    <div className='transition-transform duration-800 ease-in-out group-hover:-translate-y-6'>
                      <span className='block h-6'>Go to Wena</span>
                      <span className='block h-6'>Features</span>
                    </div>
                  </div>
                </TransitionLink>
                <FaAngleRight className='text-lg' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
