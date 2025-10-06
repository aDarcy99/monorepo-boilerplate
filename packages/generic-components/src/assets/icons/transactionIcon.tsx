import React from "react";

type Props = {};

export const Transaction = (props: Props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4.5L5 2M5 2L3 4.5M5 2L5 12"
        stroke="currentColor"
        stroke-width="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 9.5L10 12M10 12L12 9.5M10 12L10 2"
        stroke="currentColor"
        stroke-width="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
