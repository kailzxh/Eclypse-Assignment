import React from 'react';
import { Separator } from '../ui/separator';

export const PhilosophySection = (): JSX.Element => {
  return (
    <>
      <div className="relative w-[800px] h-[178px] mt-[113px] mx-auto ml-[50px]">
        <div className="absolute w-[800px] top-1 left-0 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </div>
        <div className="w-[100px] h-[100px] left-[390px] bg-[#d9d9d9] absolute top-0" />
      </div>

      <div className="absolute w-[312px] h-[41px] top-[1320px] left-[50px]">
        <div className="absolute top-px left-0 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px] leading-[normal]">
          Learn more about Eclypse
        </div>
        <Separator className="w-[301px] absolute top-10 left-0" />
        <img
          className="absolute w-[39px] h-[39px] top-0 left-[273px]"
          alt="Arrow right"
          src="/arrow-right.svg"
        />
      </div>
    </>
  );
};