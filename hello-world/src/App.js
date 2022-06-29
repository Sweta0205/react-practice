import React, { Component } from "react";
import FunctionalComponents from "./Components/FunctionalComponents";
import Test from "./Test";
import TestProps from "./Components/TestProps";
import Events from "./Components/Events";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Database from "./Components/Database";

export default class ClassComponents extends Component {
  state = {
    name: "sai",
    age: 22,
    email: "ssss@gmail.com",
    data: [],
  };
  render() {
   
    return (
      <div>
        <center>
        
          <h1>
            welcome  state Components{this.state.name},{this.state.age},{this.state.email},
            {this.state.data}
          </h1>

          <FunctionalComponents />
            <Test name={this.state.name} age={this.state.age} />
            <TestProps  />
            <Events />

          
          
            <BrowserRouter>
            
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path ="/dashboard/:name" element={<Dashboard />} />
              <Route path ="/about" element={<About />} />

            </Routes>
            </BrowserRouter>
            <Database />
        </center>
      </div>
    );
  }
}
