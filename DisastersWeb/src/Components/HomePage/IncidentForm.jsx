import React from 'react';
import { Container } from '../ReuseComponents/Container';

export const IncidentForm = () => {
  return (
    <>
      <Container className="my-10 px-6">
        <form className="w-full ">
          <div className="w-full max-w-[752px] mx-auto space-y-[25px]">
            {/* set 01 */}
            <div className="flex flex-col justify-center">
              <label className="font-bold text-[20px] sm:text-[24px] tracking-tight-custom3">
                {'Let’s give the incident a title?'}
              </label>
              <p className="text-[14px] text-accent2 leading-[22px]">
                Make a title that will easily identify the incidents
              </p>

              <input
                className="border mt-[24px] py-[12px] px-[10px] rounded-B_ru placeholder:text-xs bg-accent1/50"
                type="text"
                placeholder="Add title here"
              />
            </div>
            {/* set 02 */}
            <div className="flex flex-col justify-center">
              <label className="font-bold text-[20px] sm:text-[24px] tracking-tight-custom3">
                Describe what happened during the incident?
              </label>
              <p className="text-[14px] text-accent2 leading-[22px]">
                Share some information about the incident. The when, where, how.
              </p>
              <textarea
                className="border mt-[24px] py-[12px] px-[10px] rounded-B_ru placeholder:text-xs bg-accent1/50"
                id=""
                placeholder="Type here"
              ></textarea>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};
