import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import FunctionalComponent from './components/componentdemo/functionalcomponent';
import ClassComponent from './components/componentdemo/classcomponent';
import HiComp from './components/componentdemo/nestedcomponent';
import emp from './Data/employee.json';

function App() {
  return (
    <div className="wrapper">
      <h1>Home</h1>
      <FunctionalComponent/>
      <ClassComponent/>
      <HiComp/>
      <h2>REACT TRAINING</h2>
      <FunctionalComponent/>
      <ClassComponent/>
      <HiComp/>
      <h1>Employees list</h1>
        {emp.map((record, i) =>
          <div key={i}>
            <img src={record.path} class="img1" />
            <span>{record.firstName} </span>
            <span>{record.lastName}</span><br></br>
            <span>{record.title}</span>
            </div>)}
      </div>
    
  
 
);

}

export default App;