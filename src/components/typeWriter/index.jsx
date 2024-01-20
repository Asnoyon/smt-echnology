import React, { useEffect, useState } from 'react';
import {Images} from '../../utils/images'; // Replace 'path-to-your-images' with the actual path

const TypewriterComponent = () => {
  const [text, setText] = useState('');
  const textToType = 'Your typewriter text goes here.';
  let charIndex = 0;

  useEffect(() => {
    const typeWriter = () => {
      if (charIndex < textToType.length) {
        setText((prevText) => prevText + textToType.charAt(charIndex));
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust the delay between characters as needed
      }
    };

    // Trigger the typewriter effect when the component mounts
    typeWriter();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <p id="typewriter" className="text-9xl font-semibold flex items-center justify-center pb-10">
      gr
      <img src={Images.Logo} alt="Your Image" className="w-32 h-16" />
      {text}wth
    </p>
  );
};

export default TypewriterComponent;
