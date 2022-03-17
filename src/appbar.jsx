import { useState, useEffect } from "react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import "./styles.css";
import { Grid } from "@mui/material";
import PersistentDrawerLeft from "./appbarmobile";
import { Icon } from "./IconBar";
import Lang from "./lang";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export default function ButtonAppBar({ text, handleClick, changeLanguage }) {
  // console.log(handleClick)
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    console.log(size);
  }, [size]);
  window.addEventListener("resize", (e) => {
    // setSize(e.innerWidth)
    setTimeout(setSize(e.target.innerWidth), 1000);
  });

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ zIndex: 1300, backgroundColor: "black", height: "60px" }}
      >
        <Toolbar>
          {size < 850 ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <React.Fragment>
              <Grid item lg={12} style={{ display: "flex" }}>
                <Icon
                  text={text[3]}
                  icon={<HomeIcon />}
                  handleClick={handleClick}
                />

                <Icon
                  text={text[0]}
                  icon={<PersonRoundedIcon />}
                  handleClick={handleClick}
                />
                <Icon
                  text={text[1]}
                  icon={<SimCardDownloadIcon />}
                  handleClick={handleClick}
                />
                <Icon
                  text={text[2]}
                  icon={<CodeRoundedIcon />}
                  handleClick={handleClick}
                />
                <Icon
                  text={text[4]}
                  icon={<PermContactCalendarIcon />}
                  handleClick={handleClick}
                />
                <Lang selectLanguage={changeLanguage} content={text[5]} />
              </Grid>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Grid container>
        <PersistentDrawerLeft
          text={text}
          handleBar={open}
          handleClick={handleClick}
          changeLanguage={changeLanguage}
        />
      </Grid>
    </Box>
  );
}
