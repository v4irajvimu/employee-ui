import EmployeeCreateOrEdit from "@/components/employee-create-or-edit/EmployeeCreateOrEdit";
import { Employee } from "@/types";
import axios from "axios";

type EditEmployeeProps = {
  params: {
    id: string;
  };
};

const fetchEmployee = async (id: string) => {
  let employees: Employee | null = null;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/employee/${id}`
  );

  if (response.status === 200 && response.data) {
    employees = response.data;
  }
  return employees;
};

const EditEmployee = async ({ params }: EditEmployeeProps) => {
  const employee = await fetchEmployee(params.id);
  return <EmployeeCreateOrEdit mode="EDIT" employee={employee} />;
};

export default EditEmployee;
