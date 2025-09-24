import React from 'react';

interface CurvedBottomProps {
  // The background color of the section *following* the hero section.
  // This is crucial for the curved bottom to blend seamlessly.
  nextSectionBgColor?: string;
}

const CurvedBottom: React.FC<CurvedBottomProps> = ({ nextSectionBgColor = 'bg-background' }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-24 ${nextSectionBgColor} rounded-t-[50%] transform translate-y-1/2 z-10`}
    ></div>
  );
};

export default CurvedBottom;