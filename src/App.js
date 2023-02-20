import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header"
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
    </div>
  );
}

export default App;
