import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='h-screen w-screen flex justify-between items-center bg-black text-white px-14'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[2.083vw] text-white font-black'>FASHION</h1>
        <p className='text-[#8E8E8E] text-xl w-[340px]'>Complete your style with awesome clothes from us </p>
        
        <div className='flex justify-start items-center gap-4'>
            <div className='bg-[#e5c743] p-3 text-xl text-white font-extrabold rounded-md cursor-pointer'>
        <FaFacebookF/>
        </div>
        <div className='bg-[#e5c743] p-3 text-xl text-white font-extrabold rounded-md cursor-pointer'>
        <FaInstagram />
        </div>
        <div className='bg-[#e5c743] p-3 text-xl text-white font-extrabold rounded-md cursor-pointer'>
        <FaTwitter />
        </div>
        <div className='bg-[#e5c743] p-3 text-xl text-white font-extrabold rounded-md cursor-pointer'>
        <FaLinkedinIn />
        </div>

        </div>
      </div>

      <div className='flex items-center gap-12'>
        <div>
            <h2 className='font-normal text-xl mb-3'>Company</h2>
            <ul className='text-lg text-slate-400 gap-8'>
                <li>About</li>
                <li>Contact Us</li>
                <li>Support</li>
                <li>Careers</li>
            </ul>
        </div>

        <div>
            <h2 className='font-normal text-xl mb-3'>Quick Links</h2>
            <ul className='text-lg text-slate-400 gap-8'>
                <li>Share Location</li>
                <li>Orders Tracking</li>
                <li>Size Guide</li>
                <li>FAQs</li>
            </ul>
        </div>

        <div>
            <h2 className='font-normal text-xl mb-3'>Legal</h2>
            <ul className='text-lg text-slate-400 gap-8'>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
