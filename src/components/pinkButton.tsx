// PinkButton.tsx
import React, { ReactNode, MouseEventHandler } from 'react';

interface PinkButtonProps {
  label: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>; // Add onClick prop
}

const PinkButton: React.FC<PinkButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      type="submit"
      className="text-[#FFFF] bg-primary py-2 px-6 m-4 rounded-full font-bold text-md mt-10 border-8 border-primarybordercolor flex items-center"
      onClick={onClick} // Add onClick here
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}

export default PinkButton;
