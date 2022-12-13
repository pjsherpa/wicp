import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
  return (
    <AppBar position="static" color="black">
      <Toolbar>Navbar</Toolbar>
      Starting off
      <ul>
        <li>Explore</li>
        <li>How we got here?</li>
        <li>Story behind our travel</li>
        <li>The Experience</li>
        <li>The reason behind the photo</li>
        <li>Which phone camera used</li>
      </ul>
    </AppBar>
  );
};
export default Navbar;
