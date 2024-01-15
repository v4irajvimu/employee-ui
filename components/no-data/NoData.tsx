import type { RootState } from "@/redux/store";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const NoData = () => {
  const { term } = useSelector((state: RootState) => state.employee);
  return (
    <Stack direction="row" height={250}>
      <Typography variant="h5" color="error">
        <MinorCrashIcon />
        {term.length
          ? " No matching results found. Try with another term."
          : " No data found!"}
      </Typography>
    </Stack>
  );
};

export default NoData;
