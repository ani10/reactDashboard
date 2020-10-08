import React from 'react';
import Header from './bars/header';
import NavBar from "./bars/navBar";
import QuickStatusBar from "./bars/quickStatsBar"
import './App.css';
import LineChart from './panels/lineChart';
import DoughnutChart from './panels/doughnutChart';
import {  Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import ChatPanel from './panels/chatPanel';


const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        margin: "64px 0 0 64px"
      },
      mainGrid: {
        padding: "110px 20px 20px 20px"
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
          <Grid item lg={5} sm={12}>
            <LineChart></LineChart>
          </Grid>
          <Grid item lg={3} sm={6}>
            <DoughnutChart></DoughnutChart>
          </Grid>
          <Grid item lg={4} sm={6}>
            <ChatPanel></ChatPanel>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
