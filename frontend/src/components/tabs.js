import React from 'react'
import { Nav,Navbar } from 'react-bootstrap';
import '../eshop.css';
import {Link} from 'react-router-dom';

export default function Tabnavb(){
    return(


<>
  <Navbar >
  
    <Nav className="mr-auto">
      <Nav.Link className="nav-item">
        <Link to="/sup">Supplements </Link>
        </Nav.Link>
        <Nav.Link className="nav-item">
        <Link to="/wear">Gym Wear </Link>
        </Nav.Link>

        <Nav.Link className="nav-item">
        <Link to="/equip">Gym Equipments </Link>
        </Nav.Link>


     
    </Nav>
   
  </Navbar>
 

  
    
  
</>
 );
}