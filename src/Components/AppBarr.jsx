import React from "react";
import SearchComp from "./SearchComp";
import { Badge, Divider, IconButton } from "@mui/material";
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
             <div className="header mt-3 d-flex justify-content-between">
            <Divider sx={{color :"blue",width:"50px"}} />

              <h4 className="alert-header ms-2 ">Alerts</h4>

              <SearchContainer>
                <SearchComp />
              </SearchContainer>

              <Badge className="me-3" badgeContent={4} color="success">
                <Notifications color="action" />
              </Badge>
            </div>
    </>
  );
}
