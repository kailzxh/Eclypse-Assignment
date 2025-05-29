import React from 'react';
import { Separator } from '../ui/separator';

export const TestimonialSection = (): JSX.Element => {
  return (
    <div className="w-[1341px] h-[412px] mt-[114px] mx-auto px-[50px] relative">
      <div className="[font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px] leading-[normal]">
        OUR CUSTOMERS
      </div>

      <div className="relative mt-[92px]">
        <div className="absolute top-0 left-0 [font-family:'Coolvetica-Regular',Helvetica] text-[#f6f6f6] text-[118.8px] leading-[normal] font-normal tracking-[0]">
          &quot;
        </div>

        <div className="w-[750px] ml-[84px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-5xl tracking-[0] leading-[52.3px]">
          Understated, but unforgettable. It feels like it was made for me
        </div>

        <img
          className="absolute w-4 h-7 top-[54px] right-[204px]"
          alt="Vector"
          src="/vector-1.svg"
        />
      </div>

      <div className="mt-[80px] ml-[82px]">
        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#c3c3c3] text-2xl tracking-[0] leading-9">
          Random Woman
        </div>
        <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 mt-2 ml-2">
          NY, USA
        </div>
      </div>

      <div className="absolute right-[50px] top-[97px]">
        <img
          className="w-[126px] h-[126px]"
          alt="Ellipse"
          src="/ellipse-3.png"
        />
      </div>

      <div className="absolute right-[50px] top-[253px]">
        <img
          className="w-[69px] h-[69px]"
          alt="Ellipse"
          src="/ellipse-4.png"
        />
      </div>

      <div className="absolute right-[50px] top-[343px]">
        <img
          className="w-[69px] h-[69px]"
          alt="Ellipse"
          src="/ellipse-5.png"
        />
      </div>
      
      <Separator className="w-[1342px] mx-auto mt-[40px]" />
    </div>
  );
};