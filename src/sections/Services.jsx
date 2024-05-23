import React from 'react'
import { services } from '../constants'
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9 ">

      {services.map((service,index) => (
        <ServiceCard key={service.label} index={index}  {...service} />
      ))}

    </section>
  )
}

export default Services