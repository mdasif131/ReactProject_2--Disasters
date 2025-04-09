import React from 'react';
import { navItems } from '../Data/Information';
navItems

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-accent1 z-50 p-6 overflow-y-hidden">
      <div className="flex justify-between items-center pb-6">
        <img src="/Mlogo.png" alt="" />
        <button
          className="text-black text-4xl self-end"
          aria-label="Close Menu"
          onClick={toggleMenu}
        >
          &times;
        </button>
      </div>

      <div className="space-y-4">
        {navItems.map(({ label, link }, i) => (
          <a
            href={link}
            key={i}
            className="block text-[15px] text-black/80 hover:text-primary transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
