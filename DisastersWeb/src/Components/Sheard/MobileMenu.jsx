import React from 'react';
import { navItems } from '../Data/Information';
import { cn } from '../../Lab/Utilities';
navItems;

const MobileMenu = ({ toggleMenu, setActive, active }) => {
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
          <button
            key={i}
            onClick={() => {
              setActive(i);
              toggleMenu();
            }}
            className={`block text-[15px] ${
              i === active ? 'text-primary font-bold' : 'text-black/80'
            } hover:text-primary transition-colors duration-300`}
          >
            <a href={link}>{label}</a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
