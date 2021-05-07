import React from 'react'
import 'antd/dist/antd.css';
import HomePage from '../src/components/HomePage'
import { Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ul class="nav">
              <li><Link className="nav-Link" to="/loginPage">LOGIN PAGE</Link></li>     
              <li><Link className="nav-link" to="/home">HOME</Link></li>                
            </ul> 
          )}
        />

        <Route
          path="/home"
          render={() => (
            <HomePage/>

          )}
        />
      </Switch>  
        
    </div>
  );
}

export default App;
