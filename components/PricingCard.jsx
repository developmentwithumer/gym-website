// components/PricingCard.js
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Button from "./Button";

const PricingCard = ({ title, price, features, currency, BestOffer, className,}) => {
  return <div className={`flex items-start justify-center flex-col gap-6 p-8 rounded-xl text-white ${className} ${BestOffer ? 'premiumCard' : 'pricingCard bg-secondaryBG'}`}>
    <div className="text-xl font-urbanist font-medium"><h3 className={`${BestOffer ? 'text-white' : 'text-primary'}`}>{title}</h3></div>
    <div className="flex flex-col items-start gap-1">
      <span className="text-4xl font-urbanist font-medium">{currency}{price}</span>
      <span className={`text-start text-balance text-sm ${BestOffer ? '' : 'opacity-50'}`}>per month, bill annually</span>
    </div>
    <ul className="flex flex-col items-start gap-6 mt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2.5">
            <Image src="/check.svg" alt="Icon" width={20} height={20} />
            {feature}
          </li>
        ))}
    </ul>
    <div className="w-full flex items-center justify-center">
      <Button title="Register Now" className={`${BestOffer ? 'bg-black hover:bg-secondaryBG' : 'bg-primary hover:bg-primary-hover'} w-full h-12`} />
    </div>
  </div>;
};

// Proptypes for Validation
PricingCard.PropTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string,
  BestOffer: PropTypes.bool,
  className: PropTypes.string,
};

// Deafult Props
PricingCard.defaultProps = {
  currency: "$",
  BestOffer: false,
  className: "",
};

export default PricingCard;
