"use client";

import { Employee } from "@/types";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type EmployeeFormProps = {
  mode: "CREATE" | "EDIT";
  employee: Employee;
};

type FormInput = Omit<Employee, "_id">;

type AlertDataType = {
  show: boolean;
  variant: "success" | "error";
  message: string;
};

const EmployeeForm = ({ mode, employee }: EmployeeFormProps) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<FormInput>({
    defaultValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      gender: employee.gender,
      photo: employee.photo,
    },
  });
  const [alertData, setAlertData] = useState<AlertDataType>({
    show: false,
    variant: "success",
    message: "",
  });

  const resetAlert = () => {
    setTimeout(() => {
      setAlertData({
        show: false,
        variant: "success",
        message: "",
      });
    }, 3500);
  };

  const handleCompletion = (
    variant: "success" | "error",
    message: string,
    resetForm = false
  ) => {
    if (resetForm) reset();

    setAlertData({
      show: true,
      variant,
      message,
    });
    resetAlert();
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    if (mode === "CREATE") {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee`, data)
        .then((response) => {
          if (response.status === 201) {
            handleCompletion("success", "Employee successfully created!", true);
          }
        })
        .catch((err: AxiosError) => {
          handleCompletion("error", err.message, true);
        });
    } else {
      axios
        .put(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee/${employee._id}`,
          data
        )
        .then((response) => {
          if (response.status === 200) {
            handleCompletion("success", "Employee successfully updated!");
          }
        })
        .catch((err: AxiosError) => {
          handleCompletion("error", err.message);
        });
    }
  };

  return (
    <Stack direction="column">
      {alertData.show && (
        <Alert variant="outlined" severity={alertData.variant} sx={{ mt: 2 }}>
          {alertData.message}
        </Alert>
      )}
      <Paper sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" gap={4}>
            <Stack direction="row" alignItems="center" px={30}>
              <Typography variant="h5">
                {mode === "CREATE" ? "Create" : "Edit"} Employee
              </Typography>
            </Stack>
            {/* First name  */}
            <Stack direction="row" alignItems="center" px={30}>
              <Box width={150}>
                <Typography variant="subtitle1">First Name</Typography>
              </Box>
              <Box flexGrow={1}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{
                    required: "First name is required. Please enter first name",
                    minLength: {
                      value: 6,
                      message:
                        "Please enter a valid first name with a minimum length of 6 characters.",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "Please enter a valid first name with a maximum length of 10 characters.",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="first-name"
                      variant="filled"
                      fullWidth
                      error={!!errors?.firstName}
                      helperText={errors?.firstName?.message ?? ""}
                    />
                  )}
                />
              </Box>
            </Stack>

            {/* last name  */}
            <Stack direction="row" alignItems="center" px={30}>
              <Box width={150}>
                <Typography>Last Name</Typography>
              </Box>
              <Box flexGrow={1}>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{
                    required: "Last name is required. Please enter first name",
                    minLength: {
                      value: 6,
                      message:
                        "Please enter a valid last name with a minimum length of 6 characters.",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "Please enter a valid last name with a maximum length of 10 characters.",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="last-name"
                      variant="filled"
                      fullWidth
                      error={!!errors?.lastName}
                      helperText={errors?.lastName?.message ?? ""}
                    />
                  )}
                />
              </Box>
            </Stack>

            {/* email name  */}
            <Stack direction="row" alignItems="center" px={30}>
              <Box width={150}>
                <Typography>Email</Typography>
              </Box>
              <Box flexGrow={1}>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required. Please enter email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="email"
                      variant="filled"
                      fullWidth
                      error={!!errors?.email}
                      helperText={errors?.email?.message ?? ""}
                    />
                  )}
                />
              </Box>
            </Stack>

            {/* phone number  */}
            <Stack direction="row" alignItems="center" px={30}>
              <Box width={150}>
                <Typography variant="subtitle1">Phone Number</Typography>
              </Box>
              <Box flexGrow={1}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required:
                      "Phone number is required. Please enter phone number",
                    pattern: {
                      value: /^\+\d{11}$/,
                      message: "Please enter a valid phone number.",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="phone-number"
                      variant="filled"
                      fullWidth
                      error={!!errors?.phoneNumber}
                      helperText={errors?.phoneNumber?.message ?? ""}
                    />
                  )}
                />
              </Box>
            </Stack>

            {/* gender  */}
            <Stack direction="row" alignItems="center" px={30}>
              <Box width={150}>
                <Typography>Gender</Typography>
              </Box>
              <Box flexGrow={1}>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="gender"
                      {...field}
                      fullWidth
                      error={!!errors?.gender}
                    >
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                    </Select>
                  )}
                />
              </Box>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" px={30}>
              <Button variant="outlined" type="submit">
                {mode === "CREATE" ? "Add" : "Save"}
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
};

export default EmployeeForm;
