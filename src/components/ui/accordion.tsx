import React from 'react';

interface AccordionProps {
  type: 'single';
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps {
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  children, 
  className = '',
  collapsible = false 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            isOpen,
            onClick: () => setIsOpen(!isOpen)
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ 
  children, 
  className = '',
  ...props
}) => {
  const { isOpen, onClick } = props as any;

  return (
    <button 
      className={`flex justify-between w-full text-left ${className}`}
      onClick={onClick}
    >
      {children}
      <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ 
  children,
  ...props
}) => {
  const { isOpen } = props as any;

  if (!isOpen) return null;

  return (
    <div className="overflow-hidden transition-all">
      {children}
    </div>
  );
};