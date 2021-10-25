import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { Icon } from './IconBar';
import { Button, Grid } from '@mui/material';
import Lang from './lang';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
const drawerWidth = 160;



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({handleBar,text,icon,handleClick ,changeLanguage}) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
    React.useEffect(()=>{
        setOpen(handleBar)
    },[handleBar])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    // handleClose()
  };

  return (
    <Grid item sm={8}>
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',


          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {/* <Icon text={text[0]} icon={<PersonRoundedIcon/>} handleClick={handleClick} />
          <Icon text={text[1]} icon={<SimCardDownloadIcon/>} handleClick={handleClick} />
          <Icon text={text[2]} icon={<CodeRoundedIcon/>} handleClick={handleClick}/> */}

            <ListItem>
            <Icon text={text[3]} icon={<HomeIcon/>} handleClick={handleClick} />

            </ListItem>
            <ListItem>
            <Icon text={text[0]} icon={<PersonRoundedIcon/>} handleClick={handleClick} />
            
            </ListItem>
            <ListItem>
            <Icon text={text[1]} icon={<SimCardDownloadIcon/>} handleClick={handleClick} />
            </ListItem>
            <ListItem>
            <Icon text={text[2]} icon={<CodeRoundedIcon/>} handleClick={handleClick} />

            </ListItem>
            
            <ListItem>
            <Icon text={text[4]} icon={<PermContactCalendarIcon/>} handleClick={handleClick} />

            </ListItem>
          
        </List>
        <Divider />
        <List>
        <Button color="inherit" style={{width:160}}><Lang selectLanguage={changeLanguage} content={text[5]}/></Button>
          
        </List>
      </Drawer>
      </Grid>
  );
}