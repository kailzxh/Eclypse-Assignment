import React from 'react';

interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className = '' }: SeparatorProps): JSX.Element => {
  return (
    <div
      className={`h-[1px] bg-border ${className}`}
      role="separator"
    />
  );
};