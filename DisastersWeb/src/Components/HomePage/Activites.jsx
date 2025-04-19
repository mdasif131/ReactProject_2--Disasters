import React from 'react'
import { ActiveInfo} from '../Data/Information';
import { Container } from '../ReuseComponents/Container';
export const Activities = () => {
  return (
    <>
      <Container className=''>
          <div className="py-10 space-y-[15px] border-b">
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
                  </div>
      </Container>
    </>
  )
}
