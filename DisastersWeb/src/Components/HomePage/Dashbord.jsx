import React from 'react'
import { Card } from './Card'
import { Container } from '../ReuseComponents/Container'

export const Dashbord = () => {
  return (
    <section>
      <Container className='relative'>
        <Card />

        <button className='fixed right-4 sm:bottom-10 bottom-[10%]'>
          <div className="bg-primary inline-flex justify-center items-center size-[50px] lg:size-[77px] rounded-full cursor-pointer">
            <h1 className="font-Bebas   text-[40px] lg:text-[55.2px] text-white">C</h1>
          </div>
        </button>
      </Container>
    </section>
  );
}
