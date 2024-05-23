import React from 'react'
import Button from '../components/Button';
import { arrowRight, design } from '../assets/icons';
import { ces } from '../assets/images';
import Drop from '../components/Drop';
import { ServicesCarousel } from '../components';

const OurServices = () => {

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
       <div className='flex-1'>
        <ServicesCarousel/>
      </div>
      <div className="flex flex-col flex-1">

        <h2 className="font-palanquin text-4xl capitalize font-bold  lg:max-w-lg">
          Your Pathway to Connectivity:
          <span className="text-[#00309e]  drop-shadow font-bold"> Expert Fiber Network </span>
          Mapping Services
        </h2>
        <p className="p-4 mt-4 info-text drop-shadow text-black">
        At Coreline Engineering Solutions, we're dedicated to revolutionizing the telecommunications landscape with our innovative services. From designing robust infrastructure to optimizing network performance, we offer a comprehensive suite of solutions tailored to meet the evolving needs of our clients. Our expertise encompasses:</p>       
        <div>
          <Drop/>
        </div>

      </div>
    </section>
  )
}

export default OurServices