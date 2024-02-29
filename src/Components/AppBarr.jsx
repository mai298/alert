import React from "react";
import SearchComp from "./SearchComp";
import { Badge, Divider } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "./AppBar.css";

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
});
export default function AppBarr({ setOpen, open, setMode }) {
  return (
    <>
      <div className="header mt-3 d-flex justify-content-between">
        <Divider sx={{ color: "blue", width: "50px" }} />

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
