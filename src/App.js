import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import {BrowserRouter as  Router, Route ,NavLink} from "react-router-dom";

export default  class App extends Component
{
  render()
  {
    return(
      <div className="App">
        {
          <div>
            <p>This is working!</p>
          </div>       
        }
      </div>

      );
  }
}
