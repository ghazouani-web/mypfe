import React from 'react';
import './NavB.scss';
import { Navbar , Nav ,Form  }from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Search from './Search'

export default function NavB() {
    return (
        <div>
             <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img src="logoF.svg"   alt="..."/></Navbar.Brand>
    <Nav className="mr-auto">
    <nav className="NavBar">        
      <ul className="menuN">
        
        <li> <Link to="/Home" >  Home </Link> </li>
      
        
        <li>   <Link to="/About" > About  </Link> </li>
       
       
        <li>  <Link to="/Contact" > Contact  </Link></li>
        
        <li><a href="#!">Sign</a></li>
     </ul>
   </nav>    
   </Nav>
    <Form inline>
  <Search/>
    </Form>
  </Navbar>
            
        </div>
    )
}
