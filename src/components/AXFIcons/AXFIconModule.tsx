import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconModule(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.4 1.10001C7.8 0.900012 8.3 0.900012 8.7 1.10001L12 2.70001C13 3.20001 13 4.60001 12 5.10001L11.2 5.50001C9.2 6.50001 6.9 6.50001 4.9 5.50001L4 5.10001C3 4.60001 3 3.20001 4 2.70001L7.4 1.10001ZM3.6 1.90001L6.9 0.300012C7.6 1.22041e-05 8.3 1.22041e-05 9 0.300012L12.3 1.90001L14.7 3.00001C15.5 3.40001 16 4.20001 16 5.00001V11C16 11.9 15.5 12.7 14.7 13L9 15.7C8.3 16 7.6 16 6.9 15.7L5 14.8L1.3 13C0.5 12.6 0 11.8 0 11V5.00001C0 4.10001 0.5 3.30001 1.3 3.00001L3.6 1.90001ZM0.9 5.00001C0.9 4.50001 1.2 4.00001 1.7 3.80001L2.3 3.50001C2.2 3.90001 2.3 4.20001 2.4 4.60001C1.9 4.50001 1.4 4.70001 0.9 5.00001ZM0.9 6.80001V11C0.9 11.5 1.2 12 1.7 12.2L5.5 14C6.4 14.5 7.5 13.8 7.5 12.8V12.1C7.5 9.50001 6 7.10001 3.6 6.00001L3 5.60001C2 5.20001 0.9 5.80001 0.9 6.80001ZM7.2 14.8L7.4 14.9C7.8 15.1 8.3 15.1 8.7 14.9L8.9 14.8C8.6 14.6 8.3 14.4 8.1 14.1C7.8 14.5 7.5 14.7 7.2 14.8ZM10.5 14L14.3 12.2C14.8 12 15.1 11.5 15.1 11V6.80001C15.1 5.80001 14 5.10001 13.1 5.60001L12.5 5.90001C10 7.10001 8.5 9.50001 8.5 12.1V12.8C8.5 13.8 9.6 14.5 10.5 14ZM15.1 5.00001C15.1 4.50001 14.8 4.00001 14.3 3.80001L13.7 3.50001C13.8 3.90001 13.7 4.20001 13.6 4.60001C14.1 4.50001 14.6 4.70001 15.1 5.00001ZM9.5 7.00001C8.8 7.70001 8.3 8.50001 8 9.40001C7.7 8.50001 7.2 7.70001 6.5 7.00001C7.5 7.20001 8.5 7.20001 9.5 7.00001Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconModule };
