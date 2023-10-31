import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconRectDot(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2V14H14V2H2ZM13 13H3V3H13V13Z' fill='black' />
        <path
          d='M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconRectDot };
