import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconMinusDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M13 6H3V10H13V6Z' fill='red' fillOpacity='0.3' />
        <path d='M12 7.5H4V8.5H12V7.5Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconMinusDuo };
