import React, { useState } from "react";
// Functions
import { healthCheckApi } from "../../../healthCheck/apis/healthCheck.api";
// Components
import * as Components from "@repo/generic-components";
import * as Icons from "@repo/generic-components/icons";
// Styles
import styles from "./homepage.module.scss";
import { useQuery } from "@tanstack/react-query";
import { healthCheckQueries } from "../../../healthCheck/queries/healthCheck.query";

const HomePage = () => {
  const { isError: isHealthCheckErrored, isLoading: isHealthCheckLoading } =
    useQuery(healthCheckQueries.getAll());

  const healthCheck = isHealthCheckLoading
    ? { type: "info" as const, message: "Checking API health..." }
    : isHealthCheckErrored
    ? { type: "error" as const, message: "API health check failed." }
    : {
        type: "success" as const,
        message: "API health check success!",
      };

  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <Components.Text type="title">Monorepo boilerplate</Components.Text>
        <Components.Text type="heading">React + Express</Components.Text>
        <Components.Separator />
        <Components.Text type="body">
          My framework for building modern full-stack web applications
        </Components.Text>

        <Components.Link href="/other-page">Go to other page</Components.Link>

        <Components.Alert type={healthCheck.type}>
          {healthCheck.message}
        </Components.Alert>
      </div>
    </div>
  );
};

export default HomePage;
