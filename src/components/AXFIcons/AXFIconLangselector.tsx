import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconLangselector(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2.8 8H5.2L4 5.3L2.8 8Z' fill='black' />
        <path
          d='M14 1H2C0.9 1 0 1.9 0 3V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V3C16 1.9 15.1 1 14 1ZM7.2 11.5C7.1 11.5 7.1 11.5 7 11.5C6.8 11.5 6.6 11.4 6.5 11.2L5.6 9H2.4L1.5 11.2C1.4 11.5 1.1 11.6 0.8 11.5C0.5 11.4 0.4 11.1 0.5 10.8L3.5 3.8C3.7 3.4 4.3 3.4 4.4 3.8L7.4 10.8C7.6 11.1 7.5 11.4 7.2 11.5ZM15 6H14V4H13V9H14V7H15V11H11V9H10V12H15C15 12.6 14.6 13 14 13H8V5H9.2C8.8 5.4 8.5 5.9 8.5 6.5C8.5 7.6 9.4 8.5 10.5 8.5C11.6 8.5 12.5 7.6 12.5 6.5C12.5 5.9 12.2 5.4 11.8 5H12V4H11V3H10V4H8V2H14C14.6 2 15 2.4 15 3V6ZM9.5 6.5C9.5 5.9 9.9 5.5 10.5 5.5C11.1 5.5 11.5 5.9 11.5 6.5C11.5 7.1 11.1 7.5 10.5 7.5C9.9 7.5 9.5 7.1 9.5 6.5Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconLangselector };
