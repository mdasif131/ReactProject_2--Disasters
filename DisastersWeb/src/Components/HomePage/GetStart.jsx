import React from 'react'
import { Container } from '../ReuseComponents/Container'

export const GetStart = () => {
  return (
      <Container>
        <div className="flex flex-col justify-center items-center space-y-3 px-4">
          <h1 className="font-bold text-[32px] font-Onest max-w-[613px] text-center">
            Let&apos;s get started
          </h1>
          <p className="text-base text-accent2 leading-[26px] max-w-[468px]">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit gene
          </p>
      </div>
      <div className='flex flex-col jc items-center mt-6 px-4'>
        <div><img className='w-full max-w-[609px]' src="/rance.png" alt="" /></div>
        <div>d</div>
      </div>
      </Container>

  );
}
