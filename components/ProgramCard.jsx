import Image from 'next/image'
import React from 'react'

const ProgramCard = ({ icon, title, description, className, opacity }) => {
  return (
    <div className={`flex flex-col items-start justify-center gap-4 p-6 card rounded-xl ${className}`}>
        <Image src={icon} alt='Icon' width={32} height={32} />
        <h3 className='text-xl font-urbanist font-medium text-balance'>{title}</h3>
        <p className={`text-balance text-start ${opacity && (opacity)}`}>{description}</p>
    </div>
  )
}

export default ProgramCard