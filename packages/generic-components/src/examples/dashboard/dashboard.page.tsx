import React from "react";
// Functions
import clsx from "clsx";
// Components
import * as C from "../../components";
// Constants
import { DASHBOARD_DUMMY_DATA } from "./dashboard.constants";
// Assets
// Styles
import styles from "./dashboard.module.scss";
import * as Icons from "../../assets/icons";
import { Sidebar } from "./components/sidebar/sidebar";
import Header from "./components/header/header";

type TDashboardPageProps = {};

const DashboardPage = (props: TDashboardPageProps) => {
  return (
    <div className={clsx(styles["root"])}>
      <Sidebar />
      <div className={styles["content"]}>
        <Header />
        <main>
          <div>
            <C.Text type="title">Welcome back</C.Text>
          </div>
          <div className={clsx(styles["analytics"], styles["top-analytics"])}>
            <C.Card
              className={clsx(styles["stat-card"], styles["balance"])}
              color="neutral"
            >
              <C.Button iconOnly size="lg">
                <Icons.ArrowTopRight />
              </C.Button>
              <C.Text type="label">Balance</C.Text>
            </C.Card>
            <C.Card
              className={clsx(styles["stat-card"], styles["spending"])}
              color="neutral"
            >
              <C.Button iconOnly size="lg">
                <Icons.ArrowTopRight />
              </C.Button>
              <C.Text type="label">Spending</C.Text>
            </C.Card>
            <C.Card
              className={clsx(styles["stat-card"], styles["portfolio"])}
              color="neutral"
            >
              <C.Button iconOnly size="lg">
                <Icons.ArrowTopRight />
              </C.Button>
              <C.Text type="label">Portfolio</C.Text>
            </C.Card>
            <C.Card
              className={clsx(styles["stat-card"], styles["investment"])}
              color="neutral"
            >
              <C.Button iconOnly size="lg">
                <Icons.ArrowTopRight />
              </C.Button>
              <C.Text type="label">Investment</C.Text>
            </C.Card>

            <C.Card
              className={clsx(styles["stat-card"], styles["chart"])}
              color="neutral"
            >
              <C.Text type="label">Spending</C.Text>
              <div>
                <C.Text type="label">
                  ${DASHBOARD_DUMMY_DATA.summaries.spending.total}
                </C.Text>
                <C.TagGroup>
                  <C.Tag>
                    {DASHBOARD_DUMMY_DATA.summaries.spending.changePct}%
                  </C.Tag>
                </C.TagGroup>
              </div>
              <div></div>
            </C.Card>
          </div>
          <div
            className={clsx(styles["analytics"], styles["bottom-analytics"])}
          >
            <C.Card className={clsx(styles["spending"])}>
              <C.Text type="label">Spending</C.Text>
              <div className={styles["spending-list"]}>
                {DASHBOARD_DUMMY_DATA.spending.map((spending) => (
                  <div className={styles["spending-item"]}>
                    <Icons.Disc className={styles["spending-item-icon"]} />
                    <div className={styles["spending-item-content"]}>
                      <C.Text>{spending.title}</C.Text>
                      <C.Text color="subtle">{spending.subtitle}</C.Text>
                    </div>

                    <div className={styles["spending-item-amount"]}>
                      <C.Text>${spending.amount}</C.Text>
                    </div>
                  </div>
                ))}
              </div>
            </C.Card>
            <C.Card className={clsx(styles["transactions"])}>
              <C.Text type="label">Transactions</C.Text>
              <C.Table className={styles["transaction-table"]}>
                <C.Table.Header>
                  <C.Table.Column>
                    <C.Text>Name</C.Text>
                  </C.Table.Column>
                  <C.Table.Column>
                    <C.Text>Status</C.Text>
                  </C.Table.Column>
                  <C.Table.Column>
                    <C.Text>Date</C.Text>
                  </C.Table.Column>
                  <C.Table.Column>
                    <C.Text>Amount</C.Text>
                  </C.Table.Column>
                </C.Table.Header>
                <C.Table.Body>
                  {DASHBOARD_DUMMY_DATA.transactions.map((transaction) => (
                    <C.Table.Row>
                      <C.Table.Cell>{transaction.name}</C.Table.Cell>
                      <C.Table.Cell>{transaction.status}</C.Table.Cell>
                      <C.Table.Cell>{transaction.date}</C.Table.Cell>
                      <C.Table.Cell>{transaction.amount}</C.Table.Cell>
                    </C.Table.Row>
                  ))}
                </C.Table.Body>
              </C.Table>
            </C.Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
