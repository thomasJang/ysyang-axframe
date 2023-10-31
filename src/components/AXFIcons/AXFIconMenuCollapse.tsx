import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconMenuCollapse(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7 0H3C1.9 0 1 0.9 1 2V14C1 15.1 1.9 16 3 16H7C8.1 16 9 15.1 9 14V2C9 0.9 8.1 0 7 0ZM8 14C8 14.6 7.6 15 7 15H3C2.4 15 2 14.6 2 14V11.5H8V14ZM8 10.3H2V5.7H8V10.3ZM8 4.5H2V2C2 1.4 2.4 1 3 1H7C7.6 1 8 1.4 8 2V4.5Z'
          fill='black'
        />
        <path d='M11 8L15 12V4L11 8Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconMenuCollapse };
