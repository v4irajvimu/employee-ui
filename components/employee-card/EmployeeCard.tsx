"use client";

import {
  setDeleteCandidate,
  setDialogOpen,
} from "@/redux/slices/employee-slice";
import type { AppDispatch } from "@/redux/store";
import { Employee } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useDispatch } from "react-redux";

type EmployeeCardProps = {
  employee: Employee;
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(setDeleteCandidate(employee._id));
    dispatch(setDialogOpen(true));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={employee.photo}
        title="green iguana"
      />
      <CardContent>
        <Stack direction="column" gap={2}>
          <Typography variant="h5" component="div">
            {`${employee.firstName} ${employee.lastName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" flexWrap="wrap">
            {employee.phoneNumber}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="body2" color="text.secondary">
              {employee.gender === "F" ? "Female" : "Male"}
            </Typography>
            <Stack direction="row" gap={1}>
              <IconButton
                size="small"
                onClick={handleDelete}
                sx={{
                  "&.MuiIconButton-root": {
                    backgroundColor: "error.main",
                    color: "error.contrastText",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>

              <Link href={`/employee/edit/${employee._id}`}>
                <IconButton
                  size="small"
                  sx={{
                    "&.MuiIconButton-root": {
                      backgroundColor: "success.main",
                      color: "error.contrastText",
                    },
                  }}
                >
                  <EditIcon />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
