import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconDepartmentDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11 7V3.8L8 2L5 3.8V7L2 8.8V12.2L5 14L8 12.2L11 14L14 12.2V8.8L11 7Z' fill='red' fillOpacity='0.3' />
        <path
          d='M14.5 7.9L12 6.4V3.8C12 3.4 11.8 3.1 11.5 2.9L8.5 1.1C8.3 1 8.2 1 8 1C7.8 1 7.7 1 7.5 1.1L4.5 2.9C4.2 3.1 4 3.4 4 3.8V6.5L1.5 7.9C1.2 8.1 1 8.4 1 8.8V12.3C1 12.7 1.2 13 1.5 13.2L4.5 15C4.7 15 4.8 15 5 15C5.2 15 5.3 15 5.5 14.9L7.9 13.5H8.1L10.5 14.9C10.7 15 10.8 15 11 15C11.2 15 11.3 15 11.5 14.9L14.5 13.1C14.8 12.9 15 12.6 15 12.2V8.8C15 8.4 14.8 8.1 14.5 7.9ZM8 2L11 3.8V7L9 8V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V7.9L5 6.9V3.8L8 2ZM2 8.8L4 7.6L7.5 9.3V12.5L6 13.4V12C6 11.4 5.6 11 5 11C4.4 11 4 11.4 4 12V13.4L2 12.2V8.8ZM14 12.2L12 13.4V12C12 11.4 11.6 11 11 11C10.4 11 10 11.4 10 12V13.4L8.5 12.5V9.3L12 7.6L14 8.8V12.2Z'
          fill='black'
        />
        <path
          d='M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z'
          fill='black'
        />
        <path
          d='M5 11C5.55228 11 6 10.5523 6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z'
          fill='black'
        />
        <path
          d='M11 11C11.5523 11 12 10.5523 12 10C12 9.44772 11.5523 9 11 9C10.4477 9 10 9.44772 10 10C10 10.5523 10.4477 11 11 11Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { PeatIconDepartmentDuo };
