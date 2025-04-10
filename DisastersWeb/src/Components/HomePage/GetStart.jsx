import React from 'react'
import { Container } from '../ReuseComponents/Container'
import { GetStartInfo } from '../Data/Information';
import { Button } from '../ReuseComponents/Re_button'
export const GetStart = () => {
  return (
    <Container className='py-8'>
      <div className="flex flex-col justify-center items-center space-y-3 px-4 ">
        <h1 className="font-bold text-[32px] font-Onest max-w-[613px] text-center">
          Let&apos;s get started
        </h1>
        <p className="text-xs sm:text-[14px] text-accent2 leading-[26px] max-w-[468px]">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
          general sac mascho werhoLorem ipsum dolar sit gene
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-[33px] items-center mt-6 px-4">
        <div>
          <img className="w-full max-w-[609px]" src="/rance.png" alt="" />
        </div>

        {/* get start card */}
        <div className="flex flex-col sm:flex-row gap-[55px] flex-wrap justify-center items-center">
          {GetStartInfo.map(({ img, title, des }, i) => (
            <div
              key={i}
              className="py-[25px] px-[20px] w-full max-w-[300px] lg:max-w-[235px] bg-accent1 rounded-M_ru border space-y-[70px] lg:space-y-[68px]"
            >
              <img className="size-[54px]" src={img} alt="" />
              <div>
                <h2 className="text-[20px] font-bold leading-[29px]">
                  {title}
                </h2>
                <p className="text-accent2 text-[14px] leading-[22px]">{des}</p>
              </div>
            </div>
          ))}
        </div>
        <Button>Get started</Button>
      </div>
    </Container>
  );
}
