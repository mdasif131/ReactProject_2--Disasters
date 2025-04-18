import React, { useState } from 'react'
import { Container } from '../ReuseComponents/Container'
import { DescribesInfo } from '../Data/Information';
import { cn } from '../../Lab/Utilities';

export const DescribeIncident = () => {
  const [isactive, setIsactive] = useState(10)
  return (
    <section className="py-10 sm:px-14 mobile:px-20">
      <Container>
        <div className='space-y-[25px]'>
          <h1 className="text-[24px] font-bold -tracking-tight-custom3 text-center w-full ">
            Which of these best describes the incident?
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 items-center justify-center flex-wrap gap-[11px] w-full max-w-[753px] mx-auto ">
            {DescribesInfo.map(({ icon, iconName }, i) => (
              <div key={i}
                onClick={() => setIsactive(i)}
                className={cn("border  rounded-B_ru w-full max-w-[180px] h-[69px] flex items-center justify-start pl-5", isactive === i && 'bg-primary ')}>
                <p className={cn("text-accent2 text-xs flex justify-center items-center gap-[10px]", isactive === i && 'text-white')}>
                  <span>{icon}</span> <span>{iconName}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
