import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Separator } from '../ui/separator';

// Data for accordion items
const accordionItems = [
  { id: "size-fit", title: "Size & Fit" },
  { id: "delivery-returns", title: "Delivery & Returns" },
  { id: "how-made", title: "How This Was Made" },
];

export const AccordionSection = (): JSX.Element => {
  return (
    <div className="w-[1342px] mx-auto mt-[60px] px-[50px]">
      <Accordion type="single" className="w-full">
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-t border-b-0 py-[20px]"
          >
            <AccordionTrigger className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-white opacity-80 pt-4">
                Content for {item.title}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Separator className="w-[1342px] mx-auto mt-[40px]" />
    </div>
  );
};