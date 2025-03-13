import React from "react";

interface IconButtonProps {
  icon: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, ariaLabel }) => {
  return (
    <button
      className="flex justify-center items-center p-2 rounded-[100px] border-[1.5px] border-solid border-[#090909]"
      aria-label={ariaLabel}
    >
      <div dangerouslySetInnerHTML={{ __html: icon }} />
    </button>
  );
};

export default IconButton;
