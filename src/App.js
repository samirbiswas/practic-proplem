import React from 'react';
import './App.css';
import DailyData from './components/DailyData/DailyData';
import WeeklyRate from './components/WeeklyRate/WeeklyRate';

function App() {
  return (
    <div>
      <WeeklyRate></WeeklyRate>
      <DailyData></DailyData>
    </div>
  );
}

export default App;
