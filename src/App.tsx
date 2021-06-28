import React from 'react';
import './App.css';
import TestComp from '@components/Test';
function App() {
  return (
    <div className="App">
      <TestComp variable1={'test1'} />
    </div>
  );
}

export default App;
