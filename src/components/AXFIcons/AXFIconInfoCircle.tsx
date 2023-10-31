import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconInfoCircle(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9 6H6V7H7V11H6V12H10V11H9V6Z' fill='black' />
        <path
          d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1C11.9 1 15 4.1 15 8C15 11.9 11.9 15 8 15Z'
          fill='black'
        />
        <path
          d='M8 5C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconInfoCircle };
