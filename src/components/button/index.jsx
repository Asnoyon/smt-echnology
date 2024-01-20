import { BiSolidRightTopArrowCircle } from "react-icons/bi";


export const ButtonArrowTop = (props) => {
    return <button className=" flex text-[20px] ">
        <span className=" text-white bg-[#13B690] font-medium rounded-full text-sm px-7 py-2.5 text-center m-0" >{props?.name}</span>
        <span><BiSolidRightTopArrowCircle  className="text-[#13B690]  font-medium rounded-full text-[40px] m-0 ml-[-4px] mt-[1]"/></span>
        {/* hover:translate-x-[-180px] transition duration-700 ease-in-out */}
    </button>
}