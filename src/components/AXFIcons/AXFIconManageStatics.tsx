import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconManageStatics(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5 12H3V13H5V12Z' fill='black' />
        <path d='M8 10H6V13H8V10Z' fill='black' />
        <path d='M11 11H9V13H11V11Z' fill='black' />
        <path d='M14 8H12V13H14V8Z' fill='black' />
        <path d='M2 1H1V15H15V14H2V1Z' fill='black' />
        <path
          d='M15 1.3C14.9 1.3 14.9 1.3 15 1.3C14.9 1.2 14.9 1.2 14.8 1.1C14.8 1.1 14.8 1.1 14.7 1.1C14.7 1 14.6 1 14.5 1H11.5C11.2 1 11 1.2 11 1.5C11 1.8 11.2 2 11.5 2H13.4L9.4 6.8L6.8 5.1C6.6 5 6.3 5 6.1 5.1L3.1 8.1C3 8.3 3 8.7 3.1 8.9C3.2 9 3.4 9 3.5 9C3.6 9 3.8 9 3.9 8.9L6.6 6.2L9.3 8C9.4 8.1 9.7 8 9.9 7.8L14 2.9V4.5C14 4.8 14.2 5 14.5 5C14.8 5 15 4.8 15 4.5V1.5C15 1.4 15 1.4 15 1.3Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconManageStatics };
