import React from "react";
// Components
import * as Components from "@repo/generic-components";
// Styles
import styles from "./otherpage.module.scss";

const OtherPage = () => {
  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <Components.Link href="/">Go to home page</Components.Link>
      </div>
    </div>
  );
};

export default OtherPage;
