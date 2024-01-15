"use client";
import ActionPanel from "@/components/action-panel/ActionPanel";
import EmployeeResults from "@/components/employee-results/EmployeeResults";
import { Container, Stack } from "@mui/material";

type Props = {};

const EmployeeList = (props: Props) => {
  return (
    <Container>
      <Stack direction="column">
        <ActionPanel />
        <EmployeeResults />
      </Stack>
    </Container>
  );
};

export default EmployeeList;
