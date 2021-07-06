import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'react-bootstrap';

export default function Tabsmy(){
    return(
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <Tabsmy />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Tabsmy />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Tabsmy />
  </Tab>
</Tabs>

    );
}