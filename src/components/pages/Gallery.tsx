import React from 'react';

export const GallerySection = (): JSX.Element => {
  return (
    <div className="mt-[20px] flex flex-wrap gap-5 px-[50px]">
      <div className="w-[883px] h-[489px] rounded-[5px] [background:url(..//frame-3.png)_50%_50%_/_cover]" />
      <div className="w-[424px] h-[489px] rounded-[5px] [background:url(..//frame-18-2.png)_50%_50%_/_cover]" />

      <div className="w-[424px] h-[397px] rounded-[5px] [background:url(..//frame-18.png)_50%_50%_/_cover]" />
      <div className="w-[424px] h-[397px] rounded-[5px] [background:url(..//frame-18-1.png)_50%_50%_/_cover]" />
      <div className="w-[424px] h-[397px] rounded-[5px] [background:url(..//frame-8.png)_50%_50%_/_cover]" />
      
      {/* Product Title */}
      <div className="w-[800px] mt-[40px] ml-[-7px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
        Silhouette No. 1 – Vermilion
      </div>
    </div>
  );
};