import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconSalary(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15 6.8L9 3.4C8.7 3.2 8.3 3.2 8 3.2C7.7 3.2 7.3 3.3 7 3.5L1 6.8C0.4 7.2 0 7.8 0 8.5V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V8.6C16 7.9 15.6 7.2 15 6.8ZM14.5 7.7L13 8.6V7C13 6.9 13 6.9 13 6.8L14.5 7.7ZM7.5 4.3C7.7 4.2 7.8 4.2 8 4.2C8.2 4.2 8.3 4.2 8.5 4.3L9.8 5H6.2L7.5 4.3ZM4 7C4.6 7 5 6.6 5 6H11C11 6.6 11.4 7 12 7V9.1L8.2 11.2C8 11.3 7.9 11.3 7.7 11.2L5.5 10H9V9H5V9.7L4 9.1V7ZM3 6.8C3 6.9 3 6.9 3 7V8.6L1.5 7.7L3 6.8ZM15 14C15 14.6 14.6 15 14 15H2C1.4 15 1 14.6 1 14V8.6L7.3 12.2C7.5 12.3 7.8 12.4 8 12.4C8.3 12.4 8.5 12.3 8.7 12.2L15 8.6V14Z'
          fill='black'
        />
        <path
          d='M2.5 5C3.9 5 5 3.9 5 2.5C5 1.1 3.9 0 2.5 0C1.1 0 0 1.1 0 2.5C0 3.9 1.1 5 2.5 5ZM2.5 1C3.3 1 4 1.7 4 2.5C4 3.3 3.3 4 2.5 4C1.7 4 1 3.3 1 2.5C1 1.7 1.7 1 2.5 1Z'
          fill='black'
        />
        <path d='M3 2H2V3H3V2Z' fill='black' />
        <path d='M10 3H11V2H12V1H11V0H10V1H9V2H10V3Z' fill='black' />
        <path d='M15 3V2H14V3H13V4H14V5H15V4H16V3H15Z' fill='black' />
        <path d='M8 7H5V8H8V7Z' fill='black' />
        <path d='M11 7H9V8H11V7Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconSalary };
