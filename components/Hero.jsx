import Image from 'next/image'
import React from 'react'
import Statisfaction from './Statisfaction'
import Button from './Button'

const Hero = () => {
  return (
    <section id='hero' className='paddingContainer flexContainer flex-col md:flex-row gap-8 my-4'>
      <div className='flex flex-col gap-4 pr-4'>
          <h1 className='text-center md:text-start text-4xl font-bold text-balance font-urbanist'>Helps for your ideal body fitness</h1>
          <p className='text-center md:text-start opacity-50 text-balance'>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
          <div className='flex gap-6 justify-center md:justify-normal py-2 items-center'>
            <Button title='Start Training' className='bg-primary hover:bg-primary-hover border border-primary hover:border-primary-hover'/>
            <Button title='Watch Demo' icon='/video.svg' className='gap-2' />
          </div>
      </div>
      <div className='flex'>
        <Image src="/hero.png" alt='Image' width={255.84} height={450} />
        <Statisfaction className="md:hidden lg:flex"/>
      </div>
    </section>
  )
}

export default Hero