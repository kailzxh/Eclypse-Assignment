import React from 'react';

// Data for footer links
const footerLinks = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Buy" },
  { id: 4, label: "Our Customers" },
  { id: 5, label: "Contacts" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex w-[1340px] items-end gap-6 p-6 mt-[40px] mx-auto bg-[#090808]">
      <div className="inline-flex flex-col items-start gap-[67px] relative flex-[0_0_auto]">
        <div className="gap-2 inline-flex items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8 whitespace-nowrap">
            Eclypse
          </div>
          <img
            className="relative w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
            alt="Vector"
            src="/vector.svg"
          />
        </div>

        <FooterLinks />
      </div>

      <FooterContactInfo />
      <div className="relative flex-1 self-stretch grow" />
      <FooterRight />
    </footer>
  );
};

const FooterLinks = () => {
  return (
    <div className="flex-col gap-1 inline-flex items-start relative flex-[0_0_auto]">
      <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
        {footerLinks.slice(0, 3).map((link, index) => (
          <React.Fragment key={link.id}>
            <div className="[font-family:'Neue_Montreal-Medium',Helvetica] text-sm tracking-[0] leading-[19.6px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
              {link.label}
            </div>
            {index < 2 && (
              <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                /
              </div>
            )}
          </React.Fragment>
        ))}
        <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
          /
        </div>
      </div>

      <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
          Our Customers
        </div>
        <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
          /
        </div>
      </div>

      <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
          Contacts
        </div>
      </div>
    </div>
  );
};

const FooterContactInfo = () => {
  return (
    <div className="flex flex-col items-start justify-end gap-8 relative flex-1 self-stretch grow">
      <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
        <div className="opacity-60 [font-family:'Inter',Helvetica] text-[10px] tracking-[1.50px] leading-[13px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
          CONTACT
        </div>
        <div className="relative w-fit [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px] leading-[24.0px] whitespace-nowrap">
          +91 123-456-7890
        </div>
      </div>

      <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px] whitespace-nowrap">
          EMAIL
        </div>
        <div className="relative w-fit [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
          eclypse@gmail.com
        </div>
      </div>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className="flex flex-col items-end justify-between relative flex-1 self-stretch grow">
      <div className="relative w-10 h-10 bg-white rounded-[20px]">
        <img
          className="absolute w-[13px] h-[15px] top-3 left-[13px]"
          alt="Vector"
          src="/vector-3.svg"
        />
      </div>

      <div className="relative w-fit opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px] whitespace-nowrap">
        <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px]">
          ©
        </span>
        <span className="[font-family:'Degular_Demo-Medium',Helvetica] font-medium">
          {" "}
          Eclypse 2025
        </span>
      </div>
    </div>
  );
};