import React from 'react';
//React logo
//import logo from './logo.svg';
//Boostrap npm install react-bootstrap-validation --save
//import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import FunctionalComponent from './components/componentdemo/functionalcomponent';
import ClassComponent from './components/componentdemo/classcomponent';
import HiComp from './components/componentdemo/nestedcomponent';
import emp from './Data/employee.json';
import JsonData from './Data/employee.json';
import NavComponent from './components/Bootstrap/Nav';
import Icons from './components/Bootstrap/icons';
import { FaAmazon } from "react-icons/fa";
import ButtonComponent from './components/Bootstrap/ButtonCounter';
function App() {
  return (
    //Bootstrap Navbar
    
    <div className="App">
       <NavComponent/><br></br><br></br><br></br><br></br>
        <Icons/>
        <FaAmazon size="50px" color="black" />
        <ButtonComponent/>
    {/*   <Navbar fixed='top' bg="secondary" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home"><img
    //         src={logo} //import logo from './React.jpg'; 
    //         width="70"
    //         height="70"
    //         className="d-inline-block align-top"
    //         alt="Brand logo"
    //       />  </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#link">Link</Nav.Link>
    //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#"></NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>*/}
      <br></br>
      {/* Components */}
      <div className="wrapper">
        <h1>Home</h1>
        <FunctionalComponent />
        <ClassComponent />
        <HiComp />
        <h2>REACT TRAINING</h2>
        <FunctionalComponent />
        <ClassComponent />
        <HiComp />
        {/* JSON DATA */}
        <h1>Employees list</h1>
        {emp.map((record, i) =>
          <div key={i}>
            <img src={record.path} class="img1" />
            <span>{record.firstName} {record.lastName} </span>
          </div>)}
      </div>
      <hr>
      </hr>
      <JsonDataDisplay />
    </div>
  );
}

function JsonDataDisplay() 
{
  const DisplayData = JsonData.map(
    (info) => {
      return (
        <tr>
          <td><img src={info.path} class="img1" /></td>
          <td>{info.firstName}</td>
          <td>{info.lastName}</td>
          <td>{info.title}</td>
        </tr>
      )
    }
  )
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  )
}

export default App;