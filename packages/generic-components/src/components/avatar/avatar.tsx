import React from "react";
// Functions
import { getColorFromString } from "../../utilities/color.utilities";
// Styles
import styles from "./avatar.module.scss";
import clsx from "clsx";

type Props = {
  name?: string;
  size?: "sm" | "md" | "lg";
  radius?: "full";
};

export const Avatar = ({ name, size = "md", radius = "full" }: Props) => {
  const backgroundColor = getColorFromString(name || "Undefined Name");

  const nameInitials = name
    ?.toUpperCase()
    .split(" ")
    .slice(0, 3) // Only get first 3 words
    .map((word) => word.slice(0, 1))
    .join("");

  return (
    <div
      className={clsx(
        styles["root"],
        styles[`size--${size}`],
        styles[`radius--${radius}`]
      )}
      style={{ backgroundColor }}
    >
      {nameInitials}
    </div>
  );
};
