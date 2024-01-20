import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../utils/images'; // Import your images

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselData = [
    {
      image: Images.CarouselYellow,
      categories: ['Restaurant', 'Food'],
      title: 'Revolutionize your dining experience today',
      description:
        'LeKlub aims to promote partner restaurants and encourage users to discover new establishments. Through a strong media presence on social networks ...',
      link: '/case-study-1',
    },
    {
      image: Images.CarouselYellow,
      categories: ['R', 'F'],
      title: 'Revolutionize your dining experience today',
      description:
        'LeKlub aims to promote partner restaurants and encourage users to discover new establishments. Through a strong media presence on social networks ...',
      link: '/case-study-2',
    },
    // Add more items in a similar structure
    // { image: AnotherImage, categories: ['Category1', 'Category2'], title: 'Another Title', description: 'Another Description', link: '/case-study-2' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Auto change every 30 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <div className="rounded-[75px] bg-bgColor2 text-white max-h-[400px] overflow-hidden container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={carouselData[currentIndex].image} alt="carousel item" className="md:col-span-1 object-cover" />

        <div className="md:col-span-1 p-8">
          <div className="flex gap-5 mb-5 text-[#343434]">
            {carouselData[currentIndex].categories.map((category, index) => (
              <p key={index} className="bg-bgColor1 px-4 py-2 rounded-full">
                {category}
              </p>
            ))}
          </div>
          <h4 className="font-bold text-4xl max-w-lg">{carouselData[currentIndex].title}</h4>
          <p className="py-5 text-xl text-[#E6E6E6]">{carouselData[currentIndex].description}</p>
          <Link className="text-info underline font-semibold" to={carouselData[currentIndex].link}>
            Check Full case study
          </Link>
          <div className="flex justify-end gap-5">
            <div className="w-12 h-12 border cursor-pointer rounded-full grid place-items-center" onClick={handlePrev}>
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <div
              className="w-12 h-12 border border-[#FFDE00] bg-[#FFDE00] text-bgColor2 cursor-pointer rounded-full grid place-items-center"
              onClick={handleNext}
            >
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
