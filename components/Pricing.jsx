import React from 'react'
import PricingCard from './PricingCard'
import { BasicPackage, MidPackage, ProPackage, AthletePackage } from '../constants/constant'

const Pricing = () => {
  return (
    <section id="pricing" className="paddingContainer flex flex-col items-center gap-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className='text-lg text-balance text-center text-primary'>Pricing</span>
        <h2 className='text-center text-balance text-4xl font-urbanist font-medium'>Our List Packages</h2>
      </div>
      <div className='flex flex-wrap gap-4  items-center justify-center'>
      <PricingCard
        title="Basic Package" 
        price="25"
        features={BasicPackage}
      />
      <PricingCard
        title="Mid Package"
        price="55"
        features={MidPackage}
        BestOffer={true}
      />
      <PricingCard
        title="Pro Package"
        price="75"
        features={ProPackage}
      />
      <PricingCard
        title="Athlete Package"
        price="105"
        features={AthletePackage}
      />
      </div>
    </section>
  )
}

export default Pricing