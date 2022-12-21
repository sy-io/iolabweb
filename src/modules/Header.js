import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

import ScrollToButton from "./ScrollToButton";


const appBarStyle = makeStyles( 

  {
    root: {
      //flexGrow: 1,

    },
    appbar: {
      //minHeight: '10vh',
      //display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0.75em',
      alignItems: 'center',
      //backgroundColor: "", 
      
      color: "#FFFFFF",

    },
    title: {
      fontSize: "1.5em",
    },
    typography: {
      //flexGrow: 1,
      alignItems: 'right',
      padding: '0.75em',
    },
    buttons: {
      fontSize: "1em",
    }
  });




export default function ButtonAppBar() {

  const classes = appBarStyle();


  return (

      <div className={classes.root} >

        <AppBar style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} className={classes.appbar} position="static" >

          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>*/}

          <Typography className={classes.typography} variant="h6">
            <Box className={classes.title}>i—/o|.Lab</Box>
          </Typography>

          <ScrollToButton toId="event">New Event is coming! 22/12/26 !</ScrollToButton>

        </AppBar>

      </div>

  );
}