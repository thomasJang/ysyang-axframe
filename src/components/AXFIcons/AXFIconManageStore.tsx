import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconManageStore(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M16 4C16 3.8 15.9 3.5 15.8 3.4L13.3 0.4C13 0.1 12.7 0 12.5 0H3.5C3.3 0 3 0.1 2.8 0.4L0.3 3.4C0.1 3.5 0 3.8 0 4V7C0 7.7 0.4 8.4 1 8.7V16H15V8.7C15.6 8.4 16 7.7 16 7V4ZM10 5H12V7C12 7.6 11.6 8 11 8C10.4 8 10 7.6 10 7V5ZM7 1H9V4H7V1ZM4 5H6V7C6 7.6 5.6 8 5 8C4.4 8 4 7.6 4 7V5ZM1 4L3 1.6V4H1ZM10 15H6V13C6 11.9 6.9 11 8 11C9.1 11 10 11.9 10 13V15ZM14 15H11V13C11 11.3 9.7 10 8 10C6.3 10 5 11.3 5 13V15H2V9C2.6 9 3.1 8.7 3.5 8.3C3.9 8.7 4.4 9 5 9C5.6 9 6.1 8.7 6.5 8.3C6.9 8.7 7.4 9 8 9C8.6 9 9.1 8.7 9.5 8.3C9.9 8.7 10.4 9 11 9C11.6 9 12.1 8.7 12.5 8.3C12.9 8.7 13.4 9 14 9V15ZM13 4V1.6L15 4H13Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconManageStore };
