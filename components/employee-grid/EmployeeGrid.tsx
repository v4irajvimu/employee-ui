"use client";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EmployeeCard from "../employee-card/EmployeeCard";

type Props = {};

const EmployeeGrid = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <EmployeeCard />
      </Grid>
    </Grid>
  );
};

export default EmployeeGrid;
