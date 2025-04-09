import React, { useState } from 'react';

import { Container } from '../ReuseComponents/Container';
import { navItems } from '../Data/Information';
import MobileMenu from './MobileMenu';
import { Header } from './Header';
import { cn } from '../../Lab/Utilities';

export const Navbar = () => {
  const [isMenusOpen, setMenusOpen] = useState(false);
  const toggleMenu = () => setMenusOpen(prv => !prv);

  // Header Dynamic
  const [active, setActive] = useState(0);
  const activeNavitems = navItems[active];
  return (
    <>
      <nav className="px-2 md:px-8 py-4 bg-accent1/50 border-b ">
        <Container className="">
          <div className="flex justify-between items-center">
            <div>
              <img src="/Mlogo.png" alt="" />
            </div>

            <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-[35px] relative">
              {navItems.map(({ label, link }, i) => (
                <a href={link} key={i}>
                  <button
                    onClick={() => setActive(i)}
                    className={`text-accent2 cursor-pointer text-[14px] font-[400]  ${
                      i === active ? 'text-primary font-bold' : 'text-black/80'
                    }`}
                  >
                    {label}
                  </button>
                </a>
              ))}
              {/* nav Line */}
              <div className="absolute bottom-0 top-12 flex gap-6 w-full max-w-[576px]">
                {Array.from(Array(6).keys()).map(el => (
                  <div
                    key={el}
                    className={cn(
                      'w-[80px] h-[2px] bg-transparent rounded-[50px]',
                      active === el && 'bg-primary'
                    )}
                  ></div>
                ))}
              </div>
            </div>

            {/* action  */}
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

          {isMenusOpen && (
            <MobileMenu
              toggleMenu={toggleMenu}
              setActive={setActive}
              active={active}
            />
          )}
        </Container>
      </nav>
      <Header activeLabel={activeNavitems.label} />
    </>
  );
};
