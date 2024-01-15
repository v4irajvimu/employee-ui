import { Box, CircularProgress } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box
      height={250}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingIndicator;
