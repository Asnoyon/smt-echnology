import React from 'react'
import { Images } from '../../utils/images'

export const Testimonial = () => {
    return (
        <section className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${Images.testimonialBg})` }}>
            <div className="container">
                <div className="py-24">
                    <div className="max-w-3xl">
                        <h2 className='font-heading font-black text-6xl text-[#343434]'>Our Satisfied Customers Feedback</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
                    <div className='justify-self-center'>
                        <img src={Images.testimonial1} alt="testimonial" />
                    </div>
                    <div className="">
                        <div className='h-2 w-1/2 bg-gradient-to-r from-[#15C99F] from-0% to-[#FFBE56] to-90% rounded-full mb-10'></div>
                        <h3 className='font-heading font-black text-6xl text-[#343434]'>Robert Fox</h3>
                        <p className='text-2xl mt-3 mb-6 font-semibold text-[#555555]'>Marketing Coordinator</p>
                        <p className='text-2xl text-[#8A8A8A]'>SM Technology transformed our business with stunning web design and strategic lead generation. Their seamless solutions and top-notch service make them an invaluable partner for success. Highly recommended!</p>
                        <div className='pt-10 flex items-center gap-8'>
                            <img className='justify-self-end mt-6' src={Images.space} alt="space" />
                            <img src={Images.spaceX} alt="spaceX" />
                        </div>
                        <div className="flex flex-col items-end gap-5">
                            <div className="w-16 h-16 cursor-pointer border border-[#343434] rounded-full grid place-items-center">
                                <span class="material-symbols-outlined text-[#343434] ">arrow_forward</span>
                            </div>
                            <div className="w-16 h-16 cursor-pointer rounded-full bg-[#FFDE00] border border-[#FFDE00] grid place-items-center">
                                <span class="material-symbols-outlined text-[#343434]">arrow_back</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
