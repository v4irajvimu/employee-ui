"use client";

import type { RootState } from "@/redux/store";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import EmployeeCard from "../employee-card/EmployeeCard";

const EmployeeGrid = () => {
  const data = useSelector((state: RootState) => state.employee.data);

  return (
    <Grid container spacing={2}>
      {data.map((employee) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          key={employee._id}
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              display: "flex",
              flex: 1,
              justifyContent: "center",
            },
          })}
        >
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeGrid;
