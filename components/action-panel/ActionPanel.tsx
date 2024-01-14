"use client";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import GridIcon from "@mui/icons-material/GridOn";

type Props = {};

const ActionPanel = (props: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between" py={4}>
      {/* search field container */}
      <Stack>
        <TextField
          id="standard-basic"
          label="Search Employee"
          variant="standard"
        />
      </Stack>

      {/* Add employee and layout toggle container */}
      <Stack direction="row" gap={2}>
        <Button variant="contained" size="small" sx={{ borderRadius: 205 }}>
          Add Employee
        </Button>
        <IconButton color="primary">
          <ListIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ActionPanel;
