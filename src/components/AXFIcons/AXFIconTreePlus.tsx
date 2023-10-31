import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconTreePlus(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 11H8V8H11V7H8V4H7V7H4V8H7V11Z' fill='black' />
        <path d='M1 1V14H14V1H1ZM13 13H2V2H13V13Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconTreePlus };
