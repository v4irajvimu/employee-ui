"use client";

import { Employee } from "@/types";
import { SortTypes } from "@/utils/enums";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface EmployeeState {
  layout: "GRID" | "LIST";
  term: string;
  sort: SortTypes;
  loading: boolean;
  data: Employee[];
  error: boolean;
  errorMessage: string;
  dialogOpen: boolean;
  deleteCandidate: string;
}

const initialState: EmployeeState = {
  layout: "GRID",
  term: "",
  loading: false,
  data: [],
  error: false,
  errorMessage: "",
  dialogOpen: false,
  deleteCandidate: "",
  sort: SortTypes.FirstNameAsc,
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  (payload: { term?: string; sort: SortTypes }) => {
    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee?term=${payload.term}&sort=${payload.sort}`
      )
      .then((response) => response.data);
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  (id: string) => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee/${id}`)
      .then((response) => response.data);
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    toggleLayout: (state) => {
      state.layout = state.layout === "GRID" ? "LIST" : "GRID";
    },
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
    setDialogOpen: (state, action) => {
      state.dialogOpen = action.payload;
    },
    setDeleteCandidate: (state, action) => {
      state.deleteCandidate = action.payload;
    },
    setSortBy: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetch user cases
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
        state.errorMessage = "";
      }
    );

    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = true;
      state.errorMessage =
        action.error.message ?? "Failed to fetch employees. Try again!";
    });

    // delete user cases
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.dialogOpen = false;
      state.deleteCandidate = "";
      state.data = state.data.filter((emp) => emp._id !== action.payload._id);
    });
  },
});

export const {
  toggleLayout,
  setSearchTerm,
  setDialogOpen,
  setDeleteCandidate,
  setSortBy,
} = employeeSlice.actions;

export default employeeSlice.reducer;
