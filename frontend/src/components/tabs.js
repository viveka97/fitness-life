import React from 'react'
import { Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default function Tabnavb(){
    return(

<div className= "nav-btn-icon">


  <Button variant="primary">
  <Link to="/sup">Supplements </Link>
    </Button>{' '}
  <Button variant="secondary">
  <Link to="/wear">Gym Wear </Link>
  
  </Button>{' '}
  <Button variant="success">
  <Link to="/equip">Equipments </Link>
    </Button>{' '}
 

  </div>

    );










  

  
    
  

}