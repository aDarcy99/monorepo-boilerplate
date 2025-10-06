import React from "react";
import {
  ModalOverlay,
  Modal as RACModal,
  ModalOverlayProps as TAriaModalOverlayProps,
} from "react-aria-components";

import styles from "./modal.module.scss";
import clsx from "clsx";

export type TModalProps = TAriaModalOverlayProps & {};

export const Modal = (props: TModalProps) => {
  return (
    <ModalOverlay
      isDismissable
      className={clsx(styles["root"], props.className)}
    >
      <RACModal {...props} className={clsx(styles["content"])} />
    </ModalOverlay>
  );
};
