import React from "react";

export const Section = ({ title, info, background, footer, color }) => {
  

  return (
    <div 
      className="section bg-black h-screen w-screen text-center relative overflow-hidden"
      data-header-color={color}
    >
      <div className="relative z-30 h-full flex flex-col">
        {/* Header */}

        <div>
          {title}
          {info}
        </div>

        {/* Footer */}

        <div className="flex flex-col flex-grow justify-end pb-10">
          {footer}
        </div>
      </div>

      {/* Video */}

      <div className="absolute top-0 bottom-0 z-10">{background}</div>
    </div>
  );
};
