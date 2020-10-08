import React from 'react';
import Header from './bars/header';
import NavBar from "./bars/navBar";
import QuickStatusBar from "./bars/quickStatsBar"
import './App.css';
import LineChart from './panels/lineChart';
import DoughnutChart from './panels/doughnutChart';
import {  Grid, Hidden, makeStyles, Theme, createStyles } from '@material-ui/core';
import ChatPanel from './panels/chatPanel';


const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        margin: "64px 0 0 64px"
      },
      mainGrid: {
        margin: " 84px 0 0 10px"
      }
    }
  )
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid className={classes.root}>
        <Header />
        <NavBar />
        <QuickStatusBar />
        <Grid className={classes.mainGrid} container spacing={3}>
          <Grid item lg={12}>
          </Grid>
          <Grid item lg={6} sm={11}>
            <LineChart></LineChart>
          </Grid>
          <Grid item lg={4} sm={11}>
            <DoughnutChart></DoughnutChart>
          </Grid>
          <Hidden only="sm">
            <Grid item lg={2}>
              <ChatPanel></ChatPanel>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
