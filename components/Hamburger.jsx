import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

const Hamburger = ({ isOpen }) => {
  return (
    <div className="flex items-center justify-center">
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={() => {}}
        width={30}
        height={20}
        strokeWidth={3}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
        className="hover:scale-110 transition-transform"
      />
    </div>
  );
};

export default Hamburger;