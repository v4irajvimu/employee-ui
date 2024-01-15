/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  deleteEmployee,
  fetchEmployees,
  setDialogOpen,
} from "@/redux/slices/employee-slice";
import type { AppDispatch, RootState } from "@/redux/store";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../common/loading/LoadingIndicator";
import EmployeeGrid from "../employee-grid/EmployeeGrid";
import EmployeeList from "../employee-list/EmployeeList";
import NoData from "../no-data/NoData";

const EmployeeResults = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { dialogOpen, loading, layout, term, deleteCandidate, data, sort } =
    useSelector((state: RootState) => state.employee);

  const handleDialogClose = () => {
    dispatch(setDialogOpen(false));
  };

  const handleDelete = () => {
    if (deleteCandidate) dispatch(deleteEmployee(deleteCandidate));
  };

  useEffect(() => {
    dispatch(fetchEmployees({ term, sort }));
  }, [term, sort]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : data.length === 0 ? (
        <NoData />
      ) : layout === "GRID" ? (
        <EmployeeGrid />
      ) : (
        <EmployeeList />
      )}

      {/* Delete employee confirmation modal */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="delete-employee-dialog"
        aria-describedby="delete-employee-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this employee?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to delete an employee from the system. This action is
            irreversible, and all associated data will be permanently removed.
            Please confirm that you want to proceed with the deletion.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Disagree</Button>
          <Button
            onClick={handleDelete}
            autoFocus
            variant="contained"
            color="error"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  return;
};

export default EmployeeResults;
