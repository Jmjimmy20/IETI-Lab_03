import React, {Component} from 'react';
import clsx from "clsx";

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';

import {TodoApp} from "./TodoApp";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },

}));

export default function TemporaryDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color = "primary"
          
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <div>
          <AccountBoxIcon className="iconUser"/>
          <h3> {localStorage.getItem('Name')} </h3>
          <h4>{localStorage.getItem('User')}</h4>
          </div>
          <Divider />
          <div className="logout">
              <Button
              fullWidth
              variant="contained"
              color="default"
              size="large"
              onClick = {BttnLogout}
              startIcon={<ExitToAppIcon className='iconLogout'/>}>
              Logout
          </Button>
            
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div/>
          <Box component="span" display="block" p={1} m={1}  >
          <TodoApp/>
          </Box>
        </main>
      </div>
    );
  }
  

function BttnLogout(){
    localStorage.clear();
    window.location.reload();
};