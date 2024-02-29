import React from "react";
import { styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FolderIcon from "@mui/icons-material/Folder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import headerImg from "../assets/street suite logo-04.png";
import "./Drawwer.css";
import { useNavigate } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import { Brightness4Outlined, Brightness7Outlined, Menu } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Drawwer({ open, setOpen ,setMode}) {
  const navigate = useNavigate();
  const items = [
    { title: "Alerts", icon: <NotificationsIcon />, path: "/" },
    { title: "Training", icon: <SchoolIcon />, path: "/" },
    { title: "Automation", icon: <SettingsSuggestIcon />, path: "/" },
    { title: "Portfolio", icon: <FolderIcon />, path: "/" },
    { title: "Trading", icon: <TrendingUpIcon />, path: "/" },
  ];
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
                      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              

              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Stack direction={"column"} alignItems={"center"}>
               <IconButton
            onClick={() => {
              setMode(theme.palette.mode === "dark" ? "light" : "dark");
            }}
            
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness4Outlined />
            ) : (
              <Brightness7Outlined sx={{ color: "orange" }} />
            )}
          </IconButton> 
          <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>

</Stack>
          <DrawerHeader
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >

            <img
              src={headerImg}
              alt="header"
              className="mt-5"
              style={{
                width: open ? "20rem" : "13rem",
                height: open ? "18rem" : "13rem",
                transition: "width 0.3s, height 0.3s",
              }}
            />

          </DrawerHeader>

          <List sx={{ py: 0 }}>
            {items.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "block",

                  "&:hover": {
                    background: "#53ACFF",
                    borderRadius: "50%",
                    cursor: "pointer",
                    "&::before": {
                      content: '"coming soon"',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(20px)",
                      color: "white",
                      zIndex: 1,
                    },
                  },
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                ></ListItemButton>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <div className="avatar-style">
            <Avatar src="/broken-image.jpg" />
          </div>
        </Drawer>
      </Box>
    </>
  );
}
