import { Button } from '../ui/button';

// Data for size options
const sizeOptions = [
  { id: 1, label: "XS" },
  { id: 2, label: "S" },
  { id: 3, label: "M", selected: true },
  { id: 4, label: "L" },
  { id: 5, label: "XL" },
];

export const SizeSelector = (): JSX.Element => {
  return (
    <div className="flex gap-[32px] mt-[25px]">
      {sizeOptions.map((size) => (
        <Button
          key={size.id}
          variant="outline"
          className={`w-[82px] h-[49px] rounded bg-[#d9d9d9] border-none ${
            size.selected
              ? "bg-[#d9d9d9] text-[#767676]"
              : "bg-[#d9d9d9] text-[#767676]"
          }`}
        >
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px]">
            {size.label}
          </span>
        </Button>
      ))}
    </div>
  );
};