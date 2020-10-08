import React from 'react';
import Header from './bars/header';
import NavBar from "./bars/navBar";
import QuickStatusBar from "./bars/quickStatsBar"
import './App.css';
import LineChart from './panels/lineChart';
import DoughnutChart from './panels/doughnutChart';
import {  Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">

      <Header />
      <Grid>
      </Grid>
        <Grid container spacing={3} wrap="wrap">
          <NavBar />
          <Grid item xs={12}>
            <QuickStatusBar />
          </Grid>
          <Grid item xs={6}>
            <LineChart></LineChart>
          </Grid>
          <Grid item xs={4}>
            <DoughnutChart></DoughnutChart>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
