import {
  setDeleteCandidate,
  setDialogOpen,
} from "@/redux/slices/employee-slice";
import type { AppDispatch, RootState } from "@/redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const EmployeeList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.employee.data);

  const handleDelete = (id: string) => {
    dispatch(setDeleteCandidate(id));
    dispatch(setDialogOpen(true));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "primary.contrastText" }}>Inage</TableCell>
            <TableCell sx={{ color: "primary.contrastText" }}>
              First Name
            </TableCell>
            <TableCell sx={{ color: "primary.contrastText" }}>
              Last Name
            </TableCell>
            <TableCell sx={{ color: "primary.contrastText" }}>Email</TableCell>
            <TableCell sx={{ color: "primary.contrastText" }}>Phone</TableCell>
            <TableCell sx={{ color: "primary.contrastText" }}>Gender</TableCell>
            <TableCell sx={{ color: "primary.contrastText" }} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow
              key={employee._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Image alt="asad" src={employee.photo} width={50} height={50} />
              </TableCell>
              <TableCell component="th" scope="row">
                {employee.firstName}
              </TableCell>
              <TableCell component="th" scope="row">
                {employee.lastName}
              </TableCell>
              <TableCell component="th" scope="row">
                {employee.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {employee.phoneNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {employee.gender === "F" ? "Female" : "Male"}
              </TableCell>

              <TableCell align="right">
                <Stack
                  direction="row"
                  gap={2}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Link href={`/employee/edit/${employee._id}`}>
                    <Button size="small" variant="contained">
                      Edit
                    </Button>
                  </Link>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(employee._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
