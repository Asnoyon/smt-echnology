import { Link } from "react-router-dom"
import { Images } from "../../utils/images"

export const RecentWorkCarousel = () => {
    return (
       
         <div className="rounded-[75px] bg-bgColor2 text-white max-h-[400px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img src={Images.DownloadFirst} alt="recent works" className="md:col-span-1 object-cover" />

                <div className="md:col-span-1 p-8">
                    <div className="flex gap-5 mb-5 text-[#343434]">
                        <p className="bg-bgColor1 px-4 py-2 rounded-full">Restaurant</p>
                        <p className="bg-bgColor1 px-4 py-2 rounded-full">Food</p>
                    </div>
                    <h4 className="font-bold text-4xl max-w-lg">Revolutionize your dining experience today</h4>
                    <p className="py-5 text-xl text-[#E6E6E6]">LeKlub aims to promote partner restaurants and encourage users to discover new establishments. Through a strong media presence on social networks ...</p>
                    <Link className="text-info underline font-semibold" to="">Check Full case study</Link>
                    <div className="flex justify-end gap-5">
                        <div className="w-12 h-12 border cursor-pointer rounded-full grid place-items-center">
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </div>
                        <div className="w-12 h-12 border border-[#FFDE00] bg-[#FFDE00] text-bgColor2 cursor-pointer rounded-full grid place-items-center">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        //     <section className=' bg-[#1B2821]'>
        //     <div className="grid lg:grid-cols-4 md:grid-cols-3 container gap-4 items-center">
        //         <div className="grid col-span-2">
        //             <div className='overflow-hidden rounded-lg items-center'>
        //                 <img className=" max-w-full" src={Images.CarouselYellow} alt=""
        //                 />
        //             </div>
        //         </div>
        //         <div class="grid col-span-2">
        //         <div className="p-8">
        //                 <div className="flex gap-5 mb-5 text-[#343434]">
        //                     <p className="bg-bgColor1 px-4 py-2 rounded-full">Restaurant</p>
        //                     <p className="bg-bgColor1 px-4 py-2 rounded-full">Food</p>
        //                 </div>
        //                 <h4 className="font-bold text-4xl max-w-lg text-[#E6E6E6]">Revolutionize your dining experience today</h4>
        //                 <p className="py-5 text-xl text-[#E6E6E6]">LeKlub aims to promote partner restaurants and encourage users to discover new establishments. Through a strong media presence on social networks ...</p>
        //                 <Link className="text-info underline font-semibold" to="">Check Full case study</Link>

        //                 <div className="flex justify-end gap-5">
        //                     <div className="w-12 h-12 border cursor-pointer rounded-full grid place-items-center text-white">
        //                         <span class="material-symbols-outlined">arrow_back_ios_new</span>
        //                     </div>
        //                     <div className="w-12 h-12 border border-[#FFDE00] bg-[#FFDE00] text-bgColor2 cursor-pointer rounded-full grid place-items-center">
        //                         <span class="material-symbols-outlined">arrow_forward_ios</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </section>
    )
}
