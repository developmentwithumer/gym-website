import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section id='cta' className='paddingContainer flex justify-center w-full my-4'>
      <div className="bg-secondaryBG flexContainer flex-col lg:flex-row gap-6 w-full md:w-10/12 p-8 rounded-xl">
        <div className='flex justify-center items-center w-auto md:w-8/12'>
          <h2 className='text-3xl text-balance text-start font-urbanist'>Enhance user experience with healthy nutrition tips, support resources, and social elements.</h2>
        </div>
        <div className="flex justify-center items-center w-auto md:w-4/12">
          <Button title='Join us' className='bg-primary hover:bg-primary-hover' />
        </div>
      </div>
    </section>
  )
}

export default CTA