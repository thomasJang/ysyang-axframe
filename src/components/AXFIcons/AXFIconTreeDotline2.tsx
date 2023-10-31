import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconTreeDotline2(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 7H0V8H1V7Z' fill='black' />
        <path d='M3 7H2V8H3V7Z' fill='black' />
        <path d='M5 7H4V8H5V7Z' fill='black' />
        <path d='M7 7H6V8H7V7Z' fill='black' />
        <path d='M9 7H8V8H9V7Z' fill='black' />
        <path d='M11 7H10V8H11V7Z' fill='black' />
        <path d='M13 7H12V8H13V7Z' fill='black' />
        <path d='M15 7H14V8H15V7Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconTreeDotline2 };
