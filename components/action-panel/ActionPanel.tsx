"use client";
import { setSearchTerm, toggleLayout } from "@/redux/slices/employee-slice";
import type { RootState } from "@/redux/store";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import GridIcon from "@mui/icons-material/GridOn";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

const ActionPanel = () => {
  const [internalText, setInternalText] = useState("");
  const dispatch = useDispatch();
  const [debouncedText] = useDebounce(internalText, 1000);

  const layout = useSelector((state: RootState) => state.employee.layout);

  const handleLayoutToggle = () => {
    dispatch(toggleLayout());
  };

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInternalText(event.target.value);
  };

  useEffect(() => {
    dispatch(setSearchTerm(debouncedText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText]);

  return (
    <Stack direction="row" justifyContent="space-between" py={4}>
      {/* search field container */}
      <Stack flex={1}>
        <TextField
          id="standard-basic"
          label="Search Employee"
          variant="standard"
          value={internalText}
          onChange={handleSearchTextChange}
          fullWidth
        />
      </Stack>

      {/* Add employee and layout toggle container */}
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        flex={2}
        justifyContent="flex-end"
      >
        <Link href="/employee/add">
          <Button variant="contained" size="medium" sx={{ borderRadius: 205 }}>
            Add Employee
          </Button>
        </Link>

        {/* Toggle between GRID and LIST layouts\ */}
        <Tooltip
          title={`Switch to ${layout === "GRID" ? "list" : "grid"} view`}
          arrow
        >
          <IconButton
            color="primary"
            onClick={handleLayoutToggle}
            sx={{
              "&.MuiIconButton-root": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            {layout === "GRID" ? <ListIcon /> : <GridIcon />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default ActionPanel;
