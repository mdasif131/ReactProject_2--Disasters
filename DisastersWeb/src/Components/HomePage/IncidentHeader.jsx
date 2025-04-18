import React from 'react';
import { Container } from '../ReuseComponents/Container';
import { Button } from '../ReuseComponents/Re_button';

export const IncidentHeader = () => {
  return (
    <section className="bg-accent1/50">
      <Container className="py-6 sm:py-8 px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between px-2.5 sm:px-0">
          {/* Left Side */}
          <div className="flex items-start gap-3 sm:items-center">
            <button className="text-xl bg-white size-10 text-accent2 rounded-full font-bold">
              &times;
            </button>
            <div>
              <p className="text-xs text-accent2 tracking-tight-custom">
                Home - Incidents - New Incident
              </p>
              <h2 className="text-black font-bold text-xl sm:text-[26px] tracking-tight-custom2">
                New Incident
              </h2>
            </div>
          </div>

          {/* Center  */}
          <div className="w-full sm:max-w-[350px] lg:max-w-[527px]">
            <div className="w-full h-[5px] bg-gray-200 rounded-M_ru">
              <div
                className="h-[5px] w-[25%] bg-primary rounded-M_ru transition-all duration-300" 
              ></div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-end">
            <Button className="bg-white text-accent2 border w-full sm:w-[149px] h-[42px]">
              Back
            </Button>
            <Button className="bg-primary text-white w-full sm:w-[149px] h-[42px]">
              Next step
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
