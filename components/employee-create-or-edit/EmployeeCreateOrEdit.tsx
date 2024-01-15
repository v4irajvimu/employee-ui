"use client";

import { Employee } from "@/types";
import { Box, Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import EmployeeForm from "../employee-form/EmployeeForm";

type EmployeeCreateOrEditProps = {
  mode: "CREATE" | "EDIT";
  employee?: Employee | null;
};

const DEFAULT_EMPLOYEE: Employee = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "M",
  // TODO : Image upload feature need to implement. Getting some random URL.
  photo: `https://randomuser.me/api/portraits/men/${
    Math.floor(Math.random() * 31) + 50
  }.jpg`,
};

const EmployeeCreateOrEdit = ({
  mode,
  employee,
}: EmployeeCreateOrEditProps) => {
  return (
    <Container>
      <Stack direction="column" mt={10}>
        <Stack direction="row" justifyContent="flex-end">
          <Box>
            <Link href="/employee/list">
              <Button variant="contained" sx={{ borderRadius: 20 }}>
                List View
              </Button>
            </Link>
          </Box>
        </Stack>
        <EmployeeForm mode={mode} employee={employee ?? DEFAULT_EMPLOYEE} />
      </Stack>
    </Container>
  );
};

export default EmployeeCreateOrEdit;
