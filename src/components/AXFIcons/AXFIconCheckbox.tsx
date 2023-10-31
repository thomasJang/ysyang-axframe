import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconCheckbox(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M14 1C14.6 1 15 1.4 15 2V14C15 14.6 14.6 15 14 15H2C1.4 15 1 14.6 1 14V2C1 1.4 1.4 1 2 1H14ZM14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconCheckbox };
