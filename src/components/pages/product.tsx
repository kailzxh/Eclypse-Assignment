import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { SizeSelector } from '../common/SizeSelector';

export const ProductSection = (): JSX.Element => {
  return (
    <div className="w-[1440px] h-[912px] mt-[40px] bg-[#f6f6f6]">
      <div className="flex">
        <img
          className="w-[704px] h-[912px] object-cover"
          alt="Rectangle"
          src="/rectangle-2.png"
        />

        <div className="flex-1 px-8 pt-[53px]">
          <div className="w-[539px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-[normal]">
            A tailored composition in motion. Cut from structured wool with
            a sculpted shoulder and softened hem, this piece captures
            presence without force. Worn here in the stillness of a city in
            motion.
          </div>

          <ProductGallery />
          <Separator className="mt-[69px] w-[654px]" />
          <PriceSection />
          <SizeSection />
          <Separator className="mt-[53px] w-[654px]" />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  return (
    <div className="flex gap-5 mt-[85px]">
      <Card className="w-52 h-[199px] bg-transparent border-none">
        <CardContent className="p-0 [background:url(..//frame-12.png)_50%_50%_/_cover] h-full" />
      </Card>
      <Card className="w-52 h-[199px] bg-transparent border-none">
        <CardContent className="p-0 [background:url(..//frame-11.png)_50%_50%_/_cover] h-full" />
      </Card>
      <Card className="w-52 h-[199px] bg-transparent border-none">
        <CardContent className="p-0 [background:url(..//frame-13.png)_50%_50%_/_cover] h-full" />
      </Card>
    </div>
  );
};

const PriceSection = () => {
  return (
    <div className="mt-[20px]">
      <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px] leading-[normal]">
        ₹ 7,999
      </div>
      <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px] leading-[normal] whitespace-nowrap ml-[128px] mt-[18px]">
        MRP incl. of all taxes
      </div>
    </div>
  );
};

const SizeSection = () => {
  return (
    <div>
      <div className="mt-[45px] flex items-center">
        <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px] leading-[normal]">
          Please select a size
        </div>
        <div className="ml-[197px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline">
          Size chart
        </div>
      </div>
      
      <SizeSelector />
    </div>
  );
};

const ActionButtons = () => {
  return (
    <div className="flex gap-8 mt-[30px]">
      <Button
        variant="outline"
        className="w-[196px] h-[66px] rounded-[8.71px] border-2 border-solid border-[#c2c2c2]"
      >
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px]">
          Add to Cart
        </span>
      </Button>
      <Button className="w-[428px] h-[66px] bg-black rounded-[8.71px]">
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]">
          Buy
        </span>
      </Button>
    </div>
  );
};