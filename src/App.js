//Node imports
import React from 'react';
import { Route, Switch} from 'react-router-dom';

//Styling
import './App.css';

//Component imports
import Header from "./Header"
import Login from './Login';
import PrivateRoute from "./PrivateRoute"
import FriendsList from "./FriendsList"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}/>
          <Route path="/login" component={Login}/>      
      </Switch>
    </div>
  );
}

export default App;
