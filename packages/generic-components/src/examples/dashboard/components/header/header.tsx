import React from "react";
// Functions
import clsx from "clsx";
// Components
import * as C from "../../../../components";
// Constants
import { DASHBOARD_DUMMY_DATA } from "../../dashboard.constants";
// Assets
import * as Icons from "../../../../assets/icons";
// Styles
import styles from "./header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <C.Group className={styles["header-side"]}>
        <C.Button iconOnly size="lg">
          <Icons.EnvelopeClosed />
        </C.Button>
        <C.Button iconOnly size="lg">
          <Icons.Bell />
        </C.Button>
        <C.Button variant="transparent" size="lg">
          <C.Avatar name={DASHBOARD_DUMMY_DATA.user.name} />
          {DASHBOARD_DUMMY_DATA.user.name}
        </C.Button>
      </C.Group>
    </header>
  );
};

export default Header;
