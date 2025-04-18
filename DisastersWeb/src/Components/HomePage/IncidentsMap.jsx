import React from 'react';
import { Container } from '../ReuseComponents/Container';

export const IncidentsMap = () => {
  return (
    <section>
      <Container className=''>
        <div className="max-w-[752px] mx-auto space-y-3 py-[40px] px-2.5">
          <h1 className="font-bold text-[24px] tracking-tight-custom4">
            Where’s the incident?
          </h1>
          <p className="text-accent2 text-[14px] leading-[22px] max-w-[518px]">
            Enter a GPS, address. or pin point on the map. Try to be as accurate
            as possible, or click:Jurisdiction Wide
          </p>
          <img
            className="w-full max-w-[752px]  rounded-M_ru max-h-[589px] "
            src="/map.svg"
            alt="map image"
          />
        </div>
      </Container>
    </section>
  );
};
