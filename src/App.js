//Node imports
import React from 'react';
import { Route, Switch} from 'react-router-dom';

//Styling
import './App.css';

//Component imports
import Header from "./Header"
import Login from './Login';
import PrivateRoute from "./PrivateRoute";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <PrivateRoute exact path="/friends/add" component={AddFriend}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Login}/>      
          <Route path="/logout" component={Logout}/>
      </Switch>
    </div>
  );
}

export default App;
