import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Divider, Stack, Typography } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MoneyIcon from "@mui/icons-material/Money";
import "./AccordionComp.css";
import { useState } from "react";

export default function AccordionComp() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event, isExpanded) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Stack>
      <Accordion sx={{ mb: "20px" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <PriceCheckIcon />
            <Typography sx={{ ml: "10px" }}>AMZN</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{ display: "flex" }}>
            <RequestPageIcon />
            <Typography sx={{ ml: "10px" }}>200</Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <StackedLineChartIcon />
            <Typography sx={{ color: "#D94111", ml: "10px" }}>
              -0.25%
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <MoneyIcon />
            <Typography sx={{ ml: "10px" }}>Low Risk</Typography>
          </div>
        </AccordionSummary>
      </Accordion>

      <Accordion
        sx={{ mb: "20px" }}
        expanded={isExpanded}
        onChange={handleChange}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            "&.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
              backgroundColor: "#53ACFF",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <PriceCheckIcon />
            <Typography sx={{ ml: "10px" }}>TSLA</Typography>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: isExpanded ? "white" : "",
            }}
          />
          <div style={{ display: "flex" }}>
            <RequestPageIcon />
            <Typography sx={{ ml: "10px" }}>200</Typography>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: isExpanded ? "white" : "",
            }}
          />

          <div style={{ display: "flex" }}>
            <StackedLineChartIcon />
            <Typography sx={{ color: "#118F4B", ml: "10px" }}>
              -0.25%
            </Typography>
          </div>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: isExpanded ? "white" : "",
            }}
          />

          <div style={{ display: "flex" }}>
            <MoneyIcon />
            <Typography sx={{ ml: "10px" }}>High Risk</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          STLSA just announced an acquisition of $NFLX at $200 B. This is an
          opportunity, with the max gain being %X if the deal closes, but the
          possible risk is %Y if the deal success is %, and therefore the
          recommended play is long/short $ABC
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: "20px" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <PriceCheckIcon />
            <Typography sx={{ ml: "10px" }}>ABQQ</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{ display: "flex" }}>
            <RequestPageIcon />
            <Typography sx={{ ml: "10px" }}>200</Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <StackedLineChartIcon />
            <Typography sx={{ color: "#118F4B", ml: "10px" }}>
              -0.25%
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <MoneyIcon />
            <Typography sx={{ ml: "10px" }}>Low Risk</Typography>
          </div>
        </AccordionSummary>
      </Accordion>

      <Accordion sx={{ mb: "20px" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <PriceCheckIcon />
            <Typography sx={{ ml: "10px" }}>MSFT</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{ display: "flex" }}>
            <RequestPageIcon />
            <Typography sx={{ ml: "10px" }}>200</Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <StackedLineChartIcon />
            <Typography sx={{ color: "#D94111", ml: "10px" }}>
              -0.25%
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <MoneyIcon />
            <Typography sx={{ ml: "10px" }}>Low Risk</Typography>
          </div>
        </AccordionSummary>
      </Accordion>

      <Accordion sx={{ mb: "20px" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <PriceCheckIcon />
            <Typography sx={{ ml: "10px" }}>PYPL</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{ display: "flex" }}>
            <RequestPageIcon />
            <Typography sx={{ ml: "10px" }}>200</Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <StackedLineChartIcon />
            <Typography sx={{ color: "#118F4B", ml: "10px" }}>
              -0.25%
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <MoneyIcon />
            <Typography sx={{ ml: "10px" }}>Low Risk </Typography>
          </div>
        </AccordionSummary>
      </Accordion>

      <Accordion sx={{ mb: "20px" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <PriceCheckIcon />
            <Typography sx={{ ml: "10px" }}>NFLX</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{ display: "flex" }}>
            <RequestPageIcon />
            <Typography sx={{ ml: "10px" }}>200</Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <StackedLineChartIcon />
            <Typography sx={{ color: "#118F4B", ml: "10px" }}>
              -0.25%
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div style={{ display: "flex" }}>
            <MoneyIcon />
            <Typography sx={{ ml: "10px" }}>Low Risk </Typography>
          </div>
        </AccordionSummary>
      </Accordion>
    </Stack>
  );
}
