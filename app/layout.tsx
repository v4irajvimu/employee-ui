import Header from "@/components/common/header/Header";
import MuiThemeProvider from "@/components/common/theme-provider/MuiThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Container, Paper } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* For MUI Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <Header />
            <Paper sx={{ mt: 6 }}>{children}</Paper>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
