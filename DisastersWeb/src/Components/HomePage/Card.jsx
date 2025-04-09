import React from 'react'
import { Container } from '../ReuseComponents/Container'
import { ImageCardInfo } from '../Data/Information'

export const Card = () => {
  return (
    <section className='w-full '>
      <Container className='py-10 px-4'>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[25px] gap-y-[35px] justify-between items-center mx-auto">
          {ImageCardInfo.map(({ image, blizzard, title, des, price }, i) => (
            <div key={i} className="w-full max-w-[380px] md:max-w[306px] relative mx-auto">
              <div className="rounded-M_ru">
                <img src={image} className='w-full' />
                <div className="absolute top-2 right-2">{blizzard}</div>
              </div>
               
              <div className='pt-3'>
                <h2 className='font-bold text-base text-black leading-[30px]'>{title}</h2>
                <p className='text-[14px] font-[400] leading-[30px] text-accent2'>{des}</p>
                <p className='text-base font-bold text-black leading-[30px]'>{price}</p>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
