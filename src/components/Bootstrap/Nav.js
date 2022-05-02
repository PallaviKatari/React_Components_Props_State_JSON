import React from 'react';
//Boostrap npm install react-bootstrap-validation --save

function NavComponent()
{
return (
    //Bootstrap Navbar
    <div className="App">
     <nav class="navbar navbar-inverse navbar-fixed-top" >  
  <div class="container-fluid">  
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
    </button>
      <a class="navbar-brand" href="#">ABC</a>  
    </div>       
      <div class="collapse navbar-collapse" id="myNavbar">
    <ul class="nav navbar-nav">  
      <li class="active"><a a href="">Home</a></li>  
      <li class="dropdown"><a a href="">About</a>        
      </li>  
      <li><a a href="">Contact</a></li>  
    </ul> 
    <ul class="nav navbar-nav navbar-right">  
      <li><a href=""><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>  
      <li><a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>  
    </ul>   
  </div> 
  </div>  
</nav>
      </div>
      )
      }

      export default NavComponent;