import React from "react";
// Functions
import clsx from "clsx";
// Components
import * as C from "../../../../components";
// Constants
// Assets
import * as Icons from "../../../../assets/icons";
// Styles
import styles from "./sidebar.module.scss";

const CURRENT_PAGE: string = "home";

type TSidebarProps = {};

export const Sidebar = (props: TSidebarProps) => {
  return (
    <nav className={styles["sidebar"]}>
      <C.Text type="title">Test Dashboard</C.Text>
      <div className={styles["sidebar-section"]}>
        <C.Text type="label">Main Menu</C.Text>
        <C.ToggleButtonGroup
          className={styles["sidebar-buttons"]}
          orientation="vertical"
        >
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
            isSelected={CURRENT_PAGE === "home"}
          >
            <Icons.Home />
            Home
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
            isSelected={CURRENT_PAGE === "messages"}
          >
            <Icons.ChatBubble />
            Messages
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
            isSelected={CURRENT_PAGE === "Analytics"}
          >
            <Icons.PieChart />
            Analytics
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
            isSelected={CURRENT_PAGE === "transactions"}
          >
            <Icons.Transaction />
            Transactions
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
            isSelected={CURRENT_PAGE === "payments"}
          >
            <Icons.Money />
            Payments
          </C.ToggleButton>
        </C.ToggleButtonGroup>
      </div>

      <div className={styles["sidebar-section"]}>
        <C.Text type="label">Account Management</C.Text>
        <C.ToggleButtonGroup
          className={styles["sidebar-buttons"]}
          orientation="vertical"
        >
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
          >
            Activity
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
          >
            Balance
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
          >
            Spending
          </C.ToggleButton>
          <C.ToggleButton
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
          >
            Refund
          </C.ToggleButton>
        </C.ToggleButtonGroup>
      </div>

      <div
        className={clsx(styles["sidebar-section"], styles["sidebar-bottom"])}
      >
        <C.ButtonGroup
          className={styles["sidebar-buttons"]}
          orientation="vertical"
        >
          <C.Button
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
          >
            <Icons.Gear /> Settings
          </C.Button>
          <C.Button
            width="fit-container"
            variant="transparent"
            textAlignment="start"
            size="lg"
          >
            <Icons.Exit /> Log out
          </C.Button>
        </C.ButtonGroup>
      </div>
    </nav>
  );
};
