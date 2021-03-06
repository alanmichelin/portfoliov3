import React from "react";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { Icon } from "./IconBar";
import { Button, Grid } from "@mui/material";
import Lang from "./lang";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
const drawerWidth = 160;

export default function PersistentDrawerLeft({
  handleBar,
  text,
  handleClick,
  changeLanguage,
}) {
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    setOpen(handleBar);
  }, [handleBar]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid item sm={8}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "5vh",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton onClick={handleDrawerClose}></IconButton>

        <Divider />
        <List>
          <ListItem>
            <Icon
              text={text[3]}
              icon={<HomeIcon />}
              handleClick={handleClick}
            />
          </ListItem>
          <ListItem>
            <Icon
              text={text[0]}
              icon={<PersonRoundedIcon />}
              handleClick={handleClick}
            />
          </ListItem>
          <ListItem>
            <Icon
              text={text[1]}
              icon={<SimCardDownloadIcon />}
              handleClick={handleClick}
            />
          </ListItem>
          <ListItem>
            <Icon
              text={text[2]}
              icon={<CodeRoundedIcon />}
              handleClick={handleClick}
            />
          </ListItem>

          <ListItem>
            <Icon
              text={text[4]}
              icon={<PermContactCalendarIcon />}
              handleClick={handleClick}
            />
          </ListItem>
        </List>
        <Divider />
        <List style={{ position: "absolute", bottom: "4em" }}>
          <Button color="inherit" style={{ width: 160 }}>
            <Lang selectLanguage={changeLanguage} content={text[5]} />
          </Button>
        </List>
      </Drawer>
    </Grid>
  );
}
