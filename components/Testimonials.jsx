import React from 'react'
import { john_testimonial } from '../constants/constant'
import TestimonialCard from './TestimonialCard'
import Statisfaction from './Statisfaction'

const Testimonials = () => {
  return (
    <section id="testimonial" className="flex flex-col md:flex-row justify-center items-center paddingContainer gap-10 w-full">
      <div className='flex flex-col gap-8 w-full md:w-1/2'>
        <h2 className='text-4xl text-start text-balance font-urbanist w-full md:w-3/4'>What Our Members Say About Us?</h2>
        <span><Statisfaction/></span>
      </div>
      <div className='w-full md:w-1/2'>
        <TestimonialCard name={john_testimonial.name} profession={john_testimonial.profession} quote={john_testimonial.quote} img={john_testimonial.img} ratings={john_testimonial.ratings} />
      </div>
    </section>
  )
}

export default Testimonials