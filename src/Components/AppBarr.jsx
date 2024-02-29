import React from "react";
import SearchComp from "./SearchComp";
import { Badge, IconButton } from "@mui/material";
import {
  Brightness4Outlined,
  Brightness7Outlined,
  Notifications,
} from "@mui/icons-material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import "./AppBar.css";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
});
export default function AppBarr({ setOpen, open, setMode }) {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,

              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography className="alert-header me-5 ">Alerts</Typography>
          <SearchContainer>
            <SearchComp />
          </SearchContainer>

          <Badge badgeContent={4} color="success">
            <Notifications color="action" />
          </Badge>

          <IconButton
            onClick={() => {
              setMode(theme.palette.mode === "dark" ? "light" : "dark");
            }}
            sx={{ ml: 1 }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness4Outlined />
            ) : (
              <Brightness7Outlined sx={{ color: "orange" }} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
