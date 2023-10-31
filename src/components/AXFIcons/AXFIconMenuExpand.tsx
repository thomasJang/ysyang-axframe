import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconMenuExpand(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 4V12L5 8L1 4Z' fill='black' />
        <path d='M15 1H5V3H15V1Z' fill='black' />
        <path d='M15 13H5V15H15V13Z' fill='black' />
        <path d='M15 9H6V11H15V9Z' fill='black' />
        <path d='M15 5H6V7H15V5Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconMenuExpand };
