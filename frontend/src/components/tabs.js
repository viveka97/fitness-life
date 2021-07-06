import React from 'react'
import { Nav,Navbar } from 'react-bootstrap';
import '../eshop.css';

export default function Tabnavb(){
    return(


<>
  <Navbar >
  
    <Nav className="mr-auto">
      <Nav.Link href="#home">Supplements</Nav.Link>
      <Nav.Link href="#features">Gym Wears</Nav.Link>
      <Nav.Link href="#pricing">Gym Equipments</Nav.Link>
    </Nav>
   
  </Navbar>
 

  
    
  
</>
 );
}