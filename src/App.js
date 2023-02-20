import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Header from "./Header"
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route path="/login" component={Login}/>      
      </Switch>
    </div>
  );
}

export default App;
