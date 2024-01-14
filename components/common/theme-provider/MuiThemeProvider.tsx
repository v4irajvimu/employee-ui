"use client";
import { theme } from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

type MuiThemeProviderProps = {
  children: ReactNode;
};

const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
