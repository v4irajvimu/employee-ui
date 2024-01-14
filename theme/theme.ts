import { Palette } from "./../node_modules/@mui/material/styles/createPalette.d";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { purple } from "./colors";

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
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: purple.main,
          color: purple.contrastText,
          ":hover": {
            backgroundColor: purple.light,
          },
        },
      },
    },
  },
});
