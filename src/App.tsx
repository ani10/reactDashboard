import React from 'react';
import Header from './bars/header';
import NavBar from "./bars/navBar";
import QuickStatusBar from "./bars/quickStatsBar"
import './App.css';
import LineChart from './panels/lineChart';
import DoughnutChart from './panels/doughnutChart';
import { Box, Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Box>
        <Header />
      </Box>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Grid container spacing={3}>
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
      </Box>
    </div>
  );
}

export default App;
