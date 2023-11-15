import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ id, label, onClick, ...props }) => {
  const buttonClasses = 'flex w-auto cursor-pointer items-center';
  const hoverStyles = 'hover:bg-purple-700';

  return (
    <button
      id={id}
      className={`bg-purple-600 ${buttonClasses} ${hoverStyles} my-2 rounded-lg px-4 py-2`}
      onClick={onClick}
      {...props}
    >
      <div className="text-center font-semibold text-white">{label}</div>
    </button>
  );
};

export default Button;
