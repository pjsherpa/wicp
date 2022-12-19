import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const PAGES = [
    "Home",
    "About us",
    "Travel Through",
    "Contact Us",
    "Follow us",
  ];

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#AF601A" }}>
        <Toolbar>
          <ConnectingAirportsIcon />
          {isMatch ? (
            <>
              <Typography>WICP</Typography>
              <Burger />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button
                sx={{
                  marginLeft: "auto",
                  background: "#F7F9F9",
                  color: "black",
                }}
                variant="contained"
              >
                Login
              </Button>
              <Button
                sx={{
                  marginLeft: "10px",
                  background: "#85929E",
                  color: "black",
                }}
                variant="contained"
              >
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
