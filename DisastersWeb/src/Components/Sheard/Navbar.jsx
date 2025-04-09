import React, { useState } from 'react';

import { Container } from '../ReuseComponents/Container';
import { navItems } from '../Data/Information';
import MobileMenu from './MobileMenu';
export const Navbar = () => {
  const [isMenusOpen, setMenusOpen] = useState(false);
  const toggleMenu = () => setMenusOpen(prv => !prv);
  return (
    <>
      <nav className="px-2 md:px-8 py-4 bg-accent1/50 border-b">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <img src="/Mlogo.png" alt="" />
            </div>

            <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-[35px]">
              {navItems.map(({ label, link }, i) => (
                <a href={link} key={i}>
                  <p className="text-accent2 cursor-pointer text-[14px] font-[400]">
                    {label}
                  </p>
                </a>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 sm:gap-4">
              <img src="/notification.png" className="size-[40px]" alt="" />
              <div className="flex justify-center items-center gap-2">
                <img src="/User.png" className="size-[40px] " alt="" />
                <div className="hidden sm:block">
                  <h1 className="text-[#71717A] font-[600] text-base">
                    Usman Zafar
                  </h1>
                  <p className="text-accent2 text-[14px] leading-tight">
                    usmanzafar@gmail.com
                  </p>
                </div>
              </div>
              <button onClick={toggleMenu} className="lg:hidden block">
                <div className="space-y-1">
                  <span className="block w-6 h-[3px] bg-[#09090B]"></span>
                  <span className="block w-6 h-[3px] bg-black"></span>
                  <span className="block w-6 h-[3px] bg-black"></span>
                </div>
              </button>
            </div>
          </div>

          {isMenusOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </Container>
      </nav>
    </>
  );
};
