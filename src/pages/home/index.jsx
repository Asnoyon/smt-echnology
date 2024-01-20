import { RecentWork } from "../../components/RecentWork";
import AboutOurselves from "../../components/aboutOurselves";
import { Banner } from "../../components/banner";
// import Carousel from "../../components/carousel";
import Gallery from "../../components/gallery";
import { NewsLetter } from "../../components/newsletter";
import { Testimonial } from "../../components/testimonial";

export const Home = () => {
  return (
    <>
      <Banner />
      <AboutOurselves />
      <Gallery/>
      <RecentWork />
      <Testimonial />
      <NewsLetter />
    </>
  );
};
