import React from "react";

type Props = {};

export const Money = (props: Props) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3.5H14.2354C14.5115 3.50003 14.7354 3.72388 14.7354 4V9.94141C14.7352 10.2174 14.5114 10.4414 14.2354 10.4414H3C2.72393 10.4414 2.50012 10.2174 2.5 9.94141V4C2.5 3.72386 2.72386 3.5 3 3.5Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 6.07715H12.2354C12.5115 6.07718 12.7354 6.30103 12.7354 6.57715V12.5186C12.7352 12.7946 12.5114 13.0185 12.2354 13.0186H1C0.723934 13.0186 0.500124 12.7946 0.5 12.5186V6.57715C0.5 6.30101 0.723857 6.07715 1 6.07715Z"
        fill="white"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="6.61766" cy="9.54777" r="0.823529" stroke="currentColor" />
    </svg>
  );
};
