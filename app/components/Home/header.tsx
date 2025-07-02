import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';

const Header = () => {
  return (
    <div className='bg-[#fff]'>
    <div className='flex justify-between py-7 px-14'>
      <div className='flex flex-row space-x-5'>
<div className='flex space-x-2'>
    <div>
<CiLocationOn className='text-[#f19383]' size={35}/>
</div>
<div>
<h1 className='text-[#002C5F] text-[15px] font-bold'>   Street 27, Londom</h1>
<p className='text-[#002C5FCC] text-[13px]'>Visit Our site</p>
</div>
</div>

<div className='flex space-x-3'>
    <div>
<CiLocationOn className='text-[#f19383] hover:text-[#F19387] size={35}'/>
</div>
<div>
<h1 className='text-[#002C5F] text-[15px] font-bold'>   Street 27, Londom</h1>
<p className='text-[#002C5FCC] text-[13px]'>Visit Our site</p>
</div>
</div>
      </div>
      <div className='flex space-x-5'>
        <FaFacebook size={24} className='text-gray-400 hover:text-[#f19387] '/>
<IoLogoTwitter size={24} className='text-gray-400 hover:text-[#f19387] ' />
<FaYoutube size={24} className='text-gray-400 hover:text-[#f19387] ' />

      </div>
    </div>
    </div>
  )
}

export default Header;
