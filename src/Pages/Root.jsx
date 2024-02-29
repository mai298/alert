import React, { useState } from "react";
import Drawwer from "../Components/Drawwer";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBarr from "../Components/AppBarr";

const drawerWidth = 240;

export default function Root() {
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <AppBarr setMode={setMode} open={open} setOpen={setOpen} />
        <Drawwer
          setMode={setMode}
          drawerWidth={drawerWidth}
          open={open}
          setOpen={setOpen}
        />

        <Box
          component="main"
          sx={{
            ml: { lg: "2rem", sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "10rem",
          }}
        >
          <Outlet />
        </Box>
      </>
    </ThemeProvider>
  );
}
