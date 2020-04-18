import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeDataManagement from  './Components/EmployeeDataManagement.js';
import  AddEmployee from './Components/AddEmployee.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <EmployeeDataManagement></EmployeeDataManagement>
      </div>
    )
  }
}

export default App;
