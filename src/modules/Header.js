import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles }  from "@mui/styles";

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

          <ScrollToButton toId="event">Recent Event was <br/> 2023 / 8 / 25 !</ScrollToButton>

        </AppBar>

      </div>

  );
}