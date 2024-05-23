import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import React from 'react'
import { Images } from "../constants";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % Images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + Images.length) % Images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={Images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="w-full h-120 object-contain"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-black bg-opacity-60 text-white p-4 rounded">
            {Images[currentIndex].text}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ServicesCarousel