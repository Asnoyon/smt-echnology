import React from 'react'
import { Images } from '../../utils/images'

const Gallery = () => {
    return (
        <section className='bg-[#E8F3F0]'>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 container gap-4 pb-[100px]">
                <div className="grid">
                    <div className='overflow-hidden rounded-lg'>
                        <img className="h-[680px] max-w-full rounded-lg hover:scale-110 transition duration-700 cursor-pointer object-cover" src={Images.DownloadSecond} alt=""
                        />
                    </div>
                </div>
                <div class="grid col-span-2">
                    <div className='overflow-hidden rounded-lg'>
                        <img className="h-[680px] max-w-full rounded-lg hover:scale-110 transition duration-700 cursor-pointer object-cover" src={Images.SecondImage} alt="" />
                    </div>
                </div>
                <div className="grid overflow-hidden gap-6">
                    <div className='overflow-hidden rounded-lg block'>
                        <img className="h-[324px] max-w-full rounded-lg hover:scale-110 transition duration-700 cursor-pointer object-cover" src={Images.DownloadFourth} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <img className="h-[324px] max-w-full rounded-lg hover:scale-110 transition duration-700 cursor-pointer object-cover" src={Images.DownloadFirst} alt="" />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Gallery