
import { Button } from '../ui/button';

export const Header = (): JSX.Element => {
  return (
    <div className="fixed w-[1440px] h-[75px] top-0 left-0 bg-[#00000096] backdrop-blur-[18.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.5px)_brightness(100%)] z-50">
      <div className="relative w-[1175px] h-[45px] top-[13px] left-[60px]">
        <div className="absolute w-[49px] h-[45px] top-0 left-0 rounded-[5px] [background:url(..//frame-8.png)_50%_50%_/_cover]" />

        <div className="absolute top-3 left-[854px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px] leading-[normal] whitespace-nowrap">
          About Us
        </div>

        <div className="absolute top-3 left-[1003px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px] leading-[normal] whitespace-nowrap">
          Waitlist
        </div>

        <div className="absolute top-3 left-[1133px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px] leading-[normal] whitespace-nowrap">
          Cart
        </div>
      </div>

      <Button className="fixed top-3 left-[1278px] bg-white text-black rounded-[8.71px] px-[38.69px] py-[14.51px]">
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[19.3px] tracking-[-0.39px]">
          Buy
        </span>
      </Button>
    </div>
  );
};