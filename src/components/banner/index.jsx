import { Images } from "../../utils/images";
import { ButtonArrowTop } from "../button";
import { Link } from "react-router-dom";
import MarqueeItem from "../marqueeItem";

export const Banner = () => {
  const spinnerStyle = {
    animation: "spin 7000ms infinite",
    width: "150px",
    height: "150px",
  };
      return (
  <div className="overflow-hidden">
      <div
        className="min-h-[calc(100vh-184px)] bg-cover bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: `url('${Images.heroBg}')` }}
      >
        <div className="container relative">
          <div className="text-center pt-14 pb-28">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-8xl font-semibold font-heading">We Support</h1>
              <img
                className="mt-7"
                src={`${Images.heroHeaderArrowIcon}`}
                alt="hero header arrow icon"
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-12">
                <h1 className="ml-40 col-span-10 inline-block text-[180px] tracking-wider font-bold -mt-14 max-w-fit  animate-typing overflow-hidden whitespace-nowrap px-3">
                  <span className="col-span-1">
                    gr
                  </span>

                  <img
                    className="inline-block"
                    src={Images.BigO}
                    alt=""
                  />
                  <span>wth</span>
                </h1>
              </div>
            </div>

            <div className="flex justify-center gap-7">
              <img src={Images.heroHeaderIcon} alt="hero header icon" />
              <h1 className="text-7xl font-bold">of your business</h1>
            </div>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Collaborate on UI/UX, Web Design & Development, Data Entry, Email
              Marketing, Lead Generation projects. Let's prioritize your successes
              together!
            </p>
            <div className="flex justify-center gap-5 pt-10">
              <ButtonArrowTop name="Contact Us" />
              <Link to="" className="outlined-btn">
                Learn More
              </Link>

            </div>
          </div>
          {/* hero section badge */}
          <div className="absolute bottom-16 right-0">
            <img style={spinnerStyle} src={Images.heroBadge} alt="badge" />
          </div>
        </div>
      </div>
      {/* marquee */}
      <div className="bg-bgColor2 py-3">
        <div className="bg-white py-3 relative overflow-hidden -rotate-1">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            <MarqueeItem title="Web Design" icon={Images.service_ticker_star} />
            <MarqueeItem
              title="Web Development"
              icon={Images.service_ticker_star}
            />
            <MarqueeItem title="UI/UX Design" icon={Images.service_ticker_star} />
            <MarqueeItem title="Data Entry" icon={Images.service_ticker_star} />
            <MarqueeItem
              title="B2B Lead Generation"
              icon={Images.service_ticker_star}
            />
            <MarqueeItem
              title="Email Marketing"
              icon={Images.service_ticker_star}
            />
            <MarqueeItem
              title="Transcription"
              icon={Images.service_ticker_star}
            />
            <MarqueeItem
              title="Skip Tracing"
              icon={Images.service_ticker_star}
            />
            <MarqueeItem title="Webflow" icon={Images.service_ticker_star} />
            <MarqueeItem title="Wordpress" icon={Images.service_ticker_star} />
          </div>
        </div>
      </div>
    </div>
  );
};
