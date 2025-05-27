import React from 'react';

export const HeroSection = (): JSX.Element => {
  return (
     <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[1440px] relative">
   <div className="relative w-[1371px] h-[771px] mx-auto mt-[182px]">
          <div className="absolute w-[385px] h-[129px] top-[15px] left-[21px] z-10">
            <div className="absolute top-0 left-0 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[107.1px] tracking-[-1.07px] leading-[normal]">
              Eclypse
            </div>
            <div className="absolute w-[27px] h-[26px] top-7 left-[356px] bg-[url(/group.png)] bg-[100%_100%]" />
          </div>

          <div className="absolute w-[1339px] h-[530px] top-[209px] left-[21px] rounded-[5px] overflow-hidden z-10">
            <div className="absolute top-[468px] left-[835px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[34.6px] tracking-[-0.69px] leading-[normal] whitespace-nowrap">
              A silhouette worth remembering
            </div>
          </div>

          <img
            className="absolute w-[1371px] h-[771px] top-0 left-0 object-cover"
            alt="Element uhd"
            src="/3753692-uhd-3840-2160-25fps-1.png"
          />

          <div className="absolute w-[53px] h-[18px] top-[127px] left-[1316px] z-10">
            <div className="absolute top-0 left-[19px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px] leading-[normal]">
              2025
            </div>
            <div className="absolute w-[11px] h-[11px] top-1 left-0 bg-[url(/group-1.png)] bg-[100%_100%]" />
          </div>
        </div>
        </div>
        </div>

  );
};