import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { green, purple } from "./colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: purple,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: green.main,
          color: green.contrastText,
        },
      },
    },
  },
});
