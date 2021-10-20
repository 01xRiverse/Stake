import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../src/Components/Main'
import './App.css';
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/SignUp/SignUp';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/'  component={Main} exact></Route>
          <Route path='/Login' component={Login} ></Route> 
          <Route path='/SignUp' component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
