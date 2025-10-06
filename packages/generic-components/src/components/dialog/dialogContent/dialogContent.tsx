import React from "react";
// Components
import {
  Dialog as RACDialog,
  DialogProps as TAriaDialogProps,
} from "react-aria-components";
import { Modal } from "../../modal/modal";
import { Button } from "../../button/button";
// Assets
import * as Icons from "../../../assets/icons";
// Styles
import styles from "./dialogContent.module.scss";

type TDialogContentProps = TAriaDialogProps & {};

export const DialogContent = ({ children, ...props }: TDialogContentProps) => {
  return (
    <Modal isDismissable className={styles["root"]}>
      <RACDialog {...props}>
        <Button iconOnly className={styles["close-button"]} slot="close">
          <Icons.Cross1 />
        </Button>
        {children as any}
      </RACDialog>
    </Modal>
  );
};
