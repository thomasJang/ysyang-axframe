import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconManageSetting(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 7.00001C13.7 7.00001 15 5.70001 15 4.00001C15 3.70001 15.1 3.30001 15 3.00001L13 5.00001H11V3.00001L13 1.00001C12.7 0.900011 12.3 1.00001 12 1.00001C10.3 1.00001 9 2.30001 9 4.00001C9 4.60001 9.2 5.10001 9.4 5.60001L8 7.00001L5 4.00001L5.5 3.50001L3 2.00001L2 3.00001L3.5 5.50001L4 5.00001L7 8.00001L5.6 9.40001C5.1 9.20001 4.6 9.00001 4 9.00001C2.3 9.00001 1 10.3 1 12C1 12.3 1.1 12.6 1.1 12.9L3 11H5V13L3.1 14.9C3.4 14.9 3.7 15 4 15C5.7 15 7 13.7 7 12C7 11.4 6.8 10.9 6.6 10.4L8 9.00001L10.5 11.5L10 12L13 15L15 13L12 10L11.5 10.5L9 8.00001L10.4 6.60001C10.9 6.80001 11.4 7.00001 12 7.00001Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconManageSetting };
