import React from 'react'
import Button from './Button'

const Subscription = () => {
  return (
    <section id='community' className='paddingContainer flex justify-center items-center w-full'>
      <div className="flex flex-col items-center justify-center gap-6 p-8 rounded-2xl w-full md:w-4/5 bg-primary text-white">
        <div className='flex flex-col items-center gap-4 w-full md:w-2/3'>
          <h2 className='text-center text-balance text-3xl md:text-4xl font-medium font-urbanist'>Subscribe our fitness tips</h2>
          <p className='text-center text-balance text-sm md:text-base'>Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.</p>
          </div>
        <form className='flex flex-col lg:flex-row gap-4 items-center text-sm md:text-lg w-full md:w-3/5 relative text-black'>
          <input type="email" placeholder='Enter your email address' required className='text-sm lg:text-base p-4 rounded-lg w-full' />
          <Button title='Subcribe' type='submit' className='text-white bg-black hover:bg-secondaryBG lg:absolute right-2.5 py-2' />
        </form>
      </div>
    </section>
  )
}

export default Subscription