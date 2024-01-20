import React from 'react'
import { ButtonArrowTop } from '../button'

const AboutOurselves = () => {
  return (
    <section className='py-20 md:py-24 bg-bgColor1'>
      <div className="container">
        <div className="">
          <div className="font-heading font-black text-6xl">
            <h2 className='mb-4 text-darkColor'>Hi, We are</h2>
            <div className="w-max">
              <h2 className='max-w-fit text-secondary animate-typing overflow-hidden whitespace-nowrap pr-20 pb-8'>SM Technology</h2>
            </div>
          </div>
          <p className='text-2xl text-[#8A8A8A] max-w-2xl pb-8'>In 10 years, we've partnered with startups to Fortune 500 companies, crafting impactful interfaces. From web design to lead generation, our services drive business growth.</p>
          <ButtonArrowTop name="Read More" />
        </div>
      </div>
    </section>
  )
}

export default AboutOurselves