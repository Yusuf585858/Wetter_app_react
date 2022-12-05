import './App.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import Wetter from './Pages/wetterapp/WetterApp';

/* ${process.env.REACT_API_KEY} */

function App() {



  return (
    <div className="App">
      <Wetter />
    </div>
  );
}

export default App;
