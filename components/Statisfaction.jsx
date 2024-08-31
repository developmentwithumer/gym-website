import Image from 'next/image'
import React from 'react'

const Statisfaction = ({ className }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
        <Image src="/customers.png" alt='Customers' width={107} height={40} />
        <span className='text-center text-sm font-urbanist'>10K+ Statisfied Customers</span>
    </div>
  )
}

export default Statisfaction