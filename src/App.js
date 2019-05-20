import React from 'react';
import Countdown from '../src/components/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
    </div>
  );
}

export default App;
