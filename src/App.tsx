import React from 'react';
import Header from './bars/header';
import NavBar from "./bars/navBar";
import QuickStatusBar from "./bars/quickStatsBar"
import './App.css';
import LineChart from './panels/lineChart';
import DoughnutChart from './panels/doughnutChart';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <QuickStatusBar />
      <LineChart></LineChart>
      <DoughnutChart></DoughnutChart>
    </div>
  );
}

export default App;
