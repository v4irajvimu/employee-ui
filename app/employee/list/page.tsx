"use client";
import ActionPanel from "@/components/action-panel/ActionPanel";
import EmployeeGrid from "@/components/employee-grid/EmployeeGrid";
import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {};

const EmployeeList = (props: Props) => {
  return (
    <Container>
      <Stack direction="column">
        <ActionPanel />
        <EmployeeGrid />
      </Stack>
    </Container>
  );
};

export default EmployeeList;
