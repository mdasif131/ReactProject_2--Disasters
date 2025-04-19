import React from 'react';
import { Container } from '../ReuseComponents/Container';
import { ActiveInfo, LocCardInfo, DocumentInfo } from '../Data/Information';
import { Activities } from './Activites';

export const Locations = () => {
  return (
    <section className="py-10 px-2.5 sm:px-4 md:px-6 lg:px-8">
      <Container className="flex flex-col sm:flex-row justify-between gap-[40px] md:gap-[60px lg:gap-[94px]">
        {/* Left Side */}
        <section>
          <div className="flex flex-col space-y-[45px] border-b pb-10">
            <div className="flex gap-2 w-full">
              <img
                className="size-[28px] sm:size-[30px] md:size-[32px] lg:size-[37px]"
                src="/locationIcon.png"
                alt=""
              />
              <div>
                <p className="text-[13px] sm:text-[14px] text-accent2 leading-[22px]">
                  Location
                </p>
                <h1 className="font-bold sm:leading-[29px] text-[18px] sm:text-[20px]">
                  Tulare County, Los Angles, CA 23415
                </h1>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                className="size-[28px] sm:size-[30px] md:size-[32px] lg:size-[37px]"
                src="/pricingIcon.png"
                alt=""
              />
              <div>
                <p className="text-[13px] sm:text-[14px] text-accent2 sm:leading-[22px]">
                  Approx. Cost:
                </p>
                <h1 className="font-bold leading-[29px] text-[20px]">
                  $60,607,456.00
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-[10px] sm:gap-y-[15px] border-b py-10">
            <h2 className="font-bold leading-[22px] text-[14px]">
              Description
            </h2>
            <p className="text-accent2 text-base max-w-[677px]">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>

          <div className="py-10 flex flex-wrap gap-[17.5px] justify-center sm:justify-start items-center border-b">
            {LocCardInfo.map(({ img, title, des, price }, i) => (
              <div key={i}>
                <img className="w-full " src={img} alt={title} />
                <h2 className="text-[14px] font-bold leading-[21px]">
                  {title}
                </h2>
                <p className="text-xs leading-[21px] text-accent2">{des}</p>
                <p className="text-[14px] font-bold leading-[21px]">{price}</p>
              </div>
            ))}
          </div>

          {/* <div className="py-10 space-y-[15px] border-b">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-[14px] leading-[22px]">
                Activities
              </h2>
              <p className="text-[14px] leading-[22px] underline text-neutral-950">
                See all
              </p>
            </div>

            <div className="w-full space-y-[15px]">
              {ActiveInfo.map(({ img, title, des, price }, i) => (
                <div
                  className="w-full bg-accent1/50 px-[10px] py-[15px] rounded-M_ru flex items-center gap-[17px]"
                  key={i}
                >
                  <img src={img} alt="" />
                  <div>
                    <h2 className="font-bold text-base leading-[30px]">
                      {title}
                    </h2>
                    <p className="text-accent2 text-[14px]">{des}</p>
                    <h2 className="font-bold text-base leading-[30px]">
                      {price}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <Activities />
          <div className="py-10 space-y-[15px] ">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-[14px] leading-[22px]">
                Documents
              </h2>
              <p className="text-[14px] leading-[22px] underline text-neutral-950">
                See all
              </p>
            </div>

            <div className="w-full space-y-[15px]">
              {DocumentInfo.map(({ img, title, des, price }, i) => (
                <div
                  className="w-full bg-accent1/50 px-[10px] py-[15px] rounded-M_ru flex items-center gap-[17px]"
                  key={i}
                >
                  <img src={img} alt="" />
                  <div>
                    <h2 className="font-bold text-base leading-[30px]">
                      {title}
                    </h2>
                    <p className="text-accent2 text-[14px]">{des}</p>
                    <h2 className="font-bold text-base leading-[30px]">
                      {price}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Right Side */}
        <section>
          <div className="py-10 space-y-[20px]">
            <p className="text-[14px] leading-[22px] text-accent2">
              incident Map
            </p>
            <img className="w-full max-w-[526px] " src="/locMap.png" alt="" />
            <p className="text-[14px] leading-[22px] text-accent2">
              Start 19.1232, -118.233 End 19.3245, -119.2323
            </p>
          </div>
        </section>
      </Container>
    </section>
  );
};
