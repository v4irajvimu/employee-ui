"use client";
import {
  setSearchTerm,
  setSortBy,
  toggleLayout,
} from "@/redux/slices/employee-slice";
import type { RootState } from "@/redux/store";
import { SortOptions } from "@/utils/constants";
import { SortTypes } from "@/utils/enums";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import GridIcon from "@mui/icons-material/GridOn";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import {
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

const ActionPanel = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const [internalText, setInternalText] = useState("");

  const dispatch = useDispatch();
  const [debouncedText] = useDebounce(internalText, 1000);

  const { layout, sort } = useSelector((state: RootState) => state.employee);

  const handleLayoutToggle = () => {
    dispatch(toggleLayout());
  };

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInternalText(event.target.value);
  };

  const handleSearchTermResetClick = () => {
    setInternalText("");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (key: SortTypes) => {
    setAnchorEl(null);
    dispatch(setSortBy(key));
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    dispatch(setSearchTerm(debouncedText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText]);

  return (
    <Stack direction="row" justifyContent="space-between" py={4}>
      {/* search field and sort button container */}
      <Stack flex={2} gap={2} direction="row" alignItems="center">
        {/* sorting components */}
        <Tooltip title={SortOptions.find(({ key }) => key === sort)?.label}>
          <IconButton
            id="menu-button"
            aria-controls={menuOpen ? "sort-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
            onClick={handleMenuClick}
            sx={{
              "&.MuiIconButton-root": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            <SortByAlphaIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="sort-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
        >
          {SortOptions.map(({ key, label }) => (
            <MenuItem
              key={key}
              onClick={() => handleMenuItemClick(key)}
              selected={key === sort}
            >
              {label}
              {key === sort && <CheckCircleIcon sx={{ ml: 2 }} />}
            </MenuItem>
          ))}
        </Menu>

        {/* Search component */}
        <OutlinedInput
          id="search-input"
          placeholder="Search Employee"
          value={internalText}
          onChange={handleSearchTextChange}
          fullWidth
          endAdornment={
            internalText.length ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="search-input"
                  onClick={handleSearchTermResetClick}
                  edge="end"
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ) : null
          }
          size="small"
        />
      </Stack>

      {/* Add employee and layout toggle container */}
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        flex={3}
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
