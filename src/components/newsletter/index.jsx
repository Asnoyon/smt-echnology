import React from 'react'
import { Images } from '../../utils/images'

export const NewsLetter = () => {
    return (
        <section className="py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 px-10 py-14 rounded-[40px] bg-bgColor2">

                        <div className="grid grid-cols-2 gap-5 items-center justify-center justify-items-center">
                            <div className="text-white">
                                <p className='text-[#ADADAD] text-xl font-bold mb-4'>Got a project in mind?</p>
                                <h3 className="text-6xl font-heading font-bold">Let's discuss the details</h3>
                                <button className='mt-24 bg-secondary callingBtn hover:bg-white hover:text-secondary duration-300 transition'>Schedule a Call</button>
                            </div>

                            <div className='relative z-40'>
                                <img className='absolute -top-16 left-0 -z-10 animate-bounchingImage' src={Images.newsletter1} alt="newsletter" />
                                <img className='z-20' src={Images.newsletter2} alt="newsletter" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0C6F57] p-8 rounded-[40px] flex flex-col gap-8 group">
                        <img className='w-24 h-24 rounded-full group-hover:w-32 group-hover:h-32 duration-200' src={Images.newsletter3} alt="newsletter" />
                        <p className='text-2xl font-semibold text-white'>My name is Angela, Design Manager at SM Technology. I will answer all your questions.</p>
                        <div className="callingBtn flex items-center gap-3 w-fit bg-white hover:bg-black hover:text-white duration-300">
                            <span>Ask Questions</span>
                            <img src={Images.whatsappIcon} alt="whatsapp icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
