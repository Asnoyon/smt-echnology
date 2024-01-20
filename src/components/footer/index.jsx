import React from 'react'
import { Images } from '../../utils/images'
import { Link } from 'react-router-dom'
import { ButtonArrowTop } from '../button'

export const Footer = () => {
  return (
    <footer className='bg-bgColor2 text-white pt-40'>
      <div className="container">
        <div className='font-heading font-black text-8xl bg-gradient-to-r from-[#FFDE00] from-0% to-[#14C99E] to-100% inline-block text-transparent bg-clip-text'>
          <h2 className='mb-3'>Conenct</h2>
          <h2>With Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_180px_1fr_1fr] gap-6 mt-10">
          <div>
            <img src={Images.footerArrow} alt="footer arrow icon" />
          </div>
          <div>
            <h4 className='font-bold text-3xl uppercase mb-8'>Sitemap</h4>
            <ul className='flex flex-col gap-5 text-[#ADADAD] text-2xl font-content font-medium'>
              <li><Link className='footerTextHoverEffect' to="/about">About Us</Link></li>
              <li><Link className='footerTextHoverEffect' to="/services">Services</Link></li>
              <li><Link className='footerTextHoverEffect' to="/our-works">Our Work</Link></li>
              <li><Link className='footerTextHoverEffect' to="/career">Career</Link></li>
              <li><Link className='footerTextHoverEffect' to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-3xl uppercase mb-8'>Our Services</h4>
            <ul className='flex flex-col gap-5 text-[#ADADAD] text-2xl font-content font-medium'>
              <li><Link className='footerTextHoverEffect' to="">UI UX Design</Link></li>
              <li><Link className='footerTextHoverEffect' to="">Web Design & Development</Link></li>
              <li><Link className='footerTextHoverEffect' to="">Data Entry & Web Research</Link></li>
              <li><Link className='footerTextHoverEffect' to="">Email Marketing</Link></li>
              <li><Link className='footerTextHoverEffect' to="">B2B Lead Generation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-3xl uppercase mb-8'>Email</h4>
            <p className='underline mb-7 text-[#ADADAD] text-2xl font-content font-medium footerTextHoverEffect'>hello@smtech24.com</p>
            <ButtonArrowTop name="Contact Us" />
          </div>
        </div>
        <div className="flex justify-end my-12">
          <div className="w-12 h-12 cursor-pointer rounded-full bg-white group hover:bg-info duration-300 grid place-items-center">
            <span class="material-symbols-outlined text-[#0F8F71] font-bold group-hover:text-white duration-300">north</span>
          </div>
        </div>
      </div>
      {/* footer end */}
      <div className="pt-10 pb-14 border-t-2 border-[#B3B3B3]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center">
            <div className="flex gap-5 justify-between">
              <Link to="/">
                <img className='w-[320px]' src={Images.Logo} alt="logo" />
              </Link>
              
              <div className='flex items-center gap-5 group'>
                <div className="w-16 h-16 cursor-pointer rounded-full bg-white group-hover:bg-secondary duration-300 grid place-items-center">
                  <span class="material-symbols-outlined text-4xl text-[#0F8F71] group-hover:text-white duration-300">vertical_align_bottom</span>
                </div>
                <Link to="" className='text-3xl font-medium group-hover:text-secondary duration-300'>Company Deck</Link>
              </div>
            </div>

            <div className="flex justify-end gap-5">
              <Link to="" className='text-3xl font-medium footerTextHoverEffect'>Behance</Link>
              <Link to="" className='text-3xl font-medium footerTextHoverEffect'>Dribbble</Link>
              <Link to="" className='text-3xl font-medium footerTextHoverEffect'>LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}