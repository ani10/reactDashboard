import React from 'react';
import Header from './bars/header';
import NavBar from "./bars/navBar";
import QuickStatusBar from "./bars/quickStatsBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <QuickStatusBar />
    </div>
  );
}

export default App;
