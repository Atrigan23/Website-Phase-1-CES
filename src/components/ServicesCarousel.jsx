import React, { useState } from 'react';
import { ServiceCarousel } from '../constants'; // Make sure this is correctly imported
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handlePrev = () => {
		setActiveTab((prevIndex) => (prevIndex === 0 ? ServiceCarousel.length - 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setActiveTab((prevIndex) => (prevIndex === ServiceCarousel.length - 1 ? 0 : prevIndex + 1));
	};

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<section className="flex justify-center flex-col items-center h-[700px] w-full">
			<div className="flex justify-center space-x-4 gap-5 my-4">
				{ServiceCarousel.map((item, index) => (
					<button
						key={index}
						onClick={() => handleTabClick(index)}
						className={`px-4 py-2  rounded-full ${index === activeTab ? 'bg-[#3b82f6] text-white scale-125' : 'bg-[#00309e] text-white'}`}>
						{item.title}
					</button>
				))}
			</div>
			{/* <button
				onClick={handlePrev}
				className="absolute z-10 left-0 transform-translate-y-1/2 bg-[#00309e] text-white p-4 mx-4  hover:bg-[#3b82f6] hover:scale-125 duration-300 hover:text-white  rounded-full">
				<FaChevronLeft />
			</button> */}
			<div className="relative w-full h-full ">
				<div className="overflow-hidden w-full h-full flex justify-center items-center relative ">
					<img
						src={ServiceCarousel[activeTab].src}
						alt={ServiceCarousel[activeTab].title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-4 mb-6 mx-2  transform-translate-x-1/4-translate-y-1/4 text-white text-center p-4 bg-[#00309e] bg-opacity-70  w-full rounded-[20px] shadow-3xl px-10  transform-translate-x-1/2 flex-col">
						<h2 className="text-4xl font-bold mb-2">{ServiceCarousel[activeTab].header}</h2>
						<p className="text-2xl">{ServiceCarousel[activeTab].description}</p>
					</div>
				</div>
			</div>
			{/* <button
				onClick={handleNext}
				className="absolute right-0 z-10 transform-translate-y-1/2 bg-[#00309e] text-white p-4 mx-2 hover:bg-[#3b82f6] hover:scale-125 duration-300 hover:text-white  rounded-full">
				<FaChevronRight />
			</button> */}
		</section>
	);
};

export default Tabs;
