import React from 'react';
import { Container } from '../ReuseComponents/Container';
import { Button } from '../ReuseComponents/Re_button';
import {Link, Outlet } from 'react-router-dom';

export const Header = ({ activeLabel, btntext, Des, image }) => {

 
  return (
    <section className="bg-accent1/50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start px-4 pt-4 md:pt-[32px] pb-[10px]">
          <div className="">
            <p className=" text-accent2 text-xs font-[400] tracking-tight-custom">
              {Des}
            </p>
            <div>
              <img src={image} alt="" />
              <h1 className="text-[26px] font-bold tracking-tight-custom2">
                {activeLabel}
              </h1>
            </div>
          </div>

          <div>
            <form className="flex flex-wrap justify-start md:justify-center items-center gap-[14px]">
              <div className="flex gap-1 border border-accent1 max-w-[190px] py-[12px] px-[10px] rounded-B_ru bg-white">
                <img src="/search.svg" alt="" />
                <input
                  type="text"
                  placeholder="Search incident"
                  className="outline-none w-full text-xs text-[#71717A]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Sort By: Date modified"
                  className="text-xs py-[12px] px-[10px] border border-accent1 rounded-B_ru "
                />
              </div>

              <Link to="/getStart">
                <Button>{btntext} </Button>
              </Link>
            </form>
          </div>
      <Outlet />
        </div>
      </Container>
    </section>
  );
};
