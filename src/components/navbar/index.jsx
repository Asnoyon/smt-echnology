import { Images } from "../../utils/images";
import { FaCircleArrowDown } from "react-icons/fa6";
import { ButtonArrowTop } from "../button";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <header className="navbar bg-base-100 container h-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src="{{ Images.logo }}" alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
                <ul className="p-2">
                  <li>
                    <Link to="overview">Overview</Link>
                  </li>
                  <li>
                    <Link to="team">Team</Link>
                  </li>
                  <li>
                    <Link to="testimonial">Testimonial</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/our-works">Our Works</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
          {/* desktop view */}
          <img src={Images.Logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 w-40 bg-[#010A08] text-white mt-5">
                  <li>
                    <Link to="overview" className="hover:text-white">Overview</Link>
                  </li>
                  <li>
                    <Link to="team" className="hover:text-white">Team</Link>
                  </li>
                  <li>
                    <Link to="testimonial" className="hover:text-white">Testimonial</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/our-works">Our Works</Link>
            </li>

            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-12">
            <div className="dropdown dropdown-hover dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="m-1 flex items-center gap-2 text-xl font-semibold "
              >
                <span>Service</span> <FaCircleArrowDown className=" " />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="">Web Design & Development</Link>
                </li>
                <li>
                  <Link to="">UI UX Design</Link>
                </li>
                <li>
                  <Link to="">Email Marketing</Link>
                </li>
                <li>
                  <Link to="">B2B Lead Generation</Link>
                </li>
                <li>
                  <Link to="">Data Entry & Web Research</Link>
                </li>
              </ul>
            </div>

            <div>
              <ButtonArrowTop name="Contact Us" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
