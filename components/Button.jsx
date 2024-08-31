// components/Button.js
"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Button = ({ title, type, onClick, icon, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center ${icon ? 'p-0.5': 'px-5 py-1.5 rounded-lg'} ${className}`}
    >
      {icon && (
        <Image src={icon} alt="Icon" width={35} height={35} />
      )}
      {title && (
        <span className="text-lg whitespace-nowrap">{title}</span>
      )}
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  icon: PropTypes.string, // Ensure icon is a string if it's passed
  className: PropTypes.string,
};

// Default Props
Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  icon: null, // Default icon is null
  title: null,
  className: '',
};

export default Button;