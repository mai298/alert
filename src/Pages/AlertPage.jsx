import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import AccordionComp from "../Components/AccordionComp";
import CloseIcon from "@mui/icons-material/Close";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import './AlertPage.css';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function AlertPage() {

  const industryList=[
{title:"Health Care",icon:<FavoriteIcon/>},
{title:"Materials",icon:<AutoModeIcon/>},
{title:"Energy",icon:<BoltOutlinedIcon/>},
{title:"Consumer Discretionary",icon:<PaymentOutlinedIcon/>},
{title:"Consumer Staples",icon:<ShoppingCartOutlinedIcon/>},
{title:"Real Estate",icon:<OtherHousesOutlinedIcon/>},
  ];

const industryList2=[
  {title:"IT",icon:<PrecisionManufacturingOutlinedIcon/>},
  {title:"Communication",icon:<MapsUgcOutlinedIcon />},
  {title:"Industrials",icon:<FactoryOutlinedIcon/>},
  {title:"Utilities",icon:<ConstructionOutlinedIcon/>},
  {title:"Financials",icon:<MonetizationOnOutlinedIcon/>},



  ];

  return (
    <>
      <Box className="alert-content">
        <Container>
          <Row className="mx-auto">
            <Col lg={8}  md={12} className="ms-4" >
              <AccordionComp />
              
            </Col>

            <Col lg={2} md={12}  >
              <h4>Filters</h4>

              <div className="fileration">
                <div className="filter-applied d-flex justify-content-between">
                  <p style={{ color: "#979797" }}>Filters Applied</p>
                  <p>clear All</p>
                </div>

                <div
                  className="filterd mx-auto"  >
                  <div
                    className="filter-item text-center" >
                    <p style={{ color: "#202020" }}>Real Estate</p>
                    <CloseIcon style={{ color: "#202020" }} />
                  </div>
                </div>


                <div
                  className="stock text-start pt-4 mt-5"
                  style={{ background: "#202020" }}
                >
                  <h5 className="ms-3">Stock</h5>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: "#6B6B6B" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="$Ticker"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>

                  <div className="industry">
                    <h5 className="ps-5 mt-4">Industry</h5>
                    <div style={{ display: "flex" }}>
                      <hr
                        style={{
                          borderLeft: "3px solid #fff",
                          margin: "0 11px",
                          height: "11rem",
                        }}
                      />
                      <ul
                        className="ps-3 mb-2"
                        style={{ listStyleType: "none" }}
                      >
                        {industryList.map((item, index) => (
                          <li key={index}>
                            {item.icon}
                            {item.title}
                          </li>
                        ))}
                      </ul>

                      <hr
                        style={{
                          borderLeft: "3px solid #fff",
                          margin: "0 11px",
                          height: "8rem",
                        }}
                      />
                      <ul
                        className="ps-3 mb-2"
                        style={{ listStyleType: "none" }}
                      >
                        {industryList2.map((item, index) => (
                          <li key={index}>
                            {item.icon}
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="radio pt-4"
                    style={{ display: "flex ", justifyContent: "space-around" }}
                  >
                    <FormControl>
                      <FormLabel
                        id="demo-radio-buttons-group-label filter-label"
                        className="filter-label"
                      >
                        Market cap
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Micro"
                          control={<Radio />}
                          label="Micro"
                        />
                        <FormControlLabel
                          value="Small"
                          control={<Radio />}
                          label="Small"
                        />
                        <FormControlLabel
                          value="Large"
                          checked
                          control={<Radio />}
                          label="Large"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        id="demo-radio-buttons-group-label "
                        className="filter-label"
                      >
                        Risk Level
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Low Risk"
                          control={<Radio />}
                          label="Low Risk"
                        />
                        <FormControlLabel
                          value="Mid Risk"
                          checked
                          control={<Radio />}
                          label="Mid Risk"
                        />
                        <FormControlLabel
                          value="Low Risk"
                          control={<Radio />}
                          label="Low Risk"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div
                    className="filter-footer pt-3"
                    style={{ display: "flex ", justifyContent: "space-around" }}
                  >
                    <ul
                      className="filter-list"
                      style={{ listStyleType: "none" }}
                    >
                      <h5 className="text-center">Strategy</h5>
                      <li>Big Option Buys</li>
                      <li className="strategy-li"> Merger Arbitrage</li>
                      <li> Short Reports</li>
                    </ul>

                    <ul style={{ listStyleType: "none" }}>
                    <h5 className="text-center">Asset</h5>

                      <li> stocks</li>
                      <li className="asset-li text-center">Options</li>
                      <li> Futures</li>
                    </ul>
                  </div>
                </div>
              </div>

        <Button className="applyBtn mt-3">Apply</Button>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
}
