import React, { ReactNode } from 'react';
import Button from './Button';

interface CardProps {
  children: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, buttonText, onButtonClick }) => {
  return (
    <div className="flex h-auto max-w-xl flex-col items-center justify-center rounded-lg bg-white py-4 shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.1),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]">
      {children}
      {buttonText && onButtonClick && (
        <Button label={buttonText} onClick={onButtonClick} />
      )}
    </div>
  );
};

export default Card;
