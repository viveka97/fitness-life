import React from 'react';
import '../product.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';


export default function Header(){
    return(
        <Navbar>
            <Container>
                <Row>
                    <nav>
                        <Col>
                            <Navbar.Brand className= "logo">Fitness Life</Navbar.Brand>
                        </Col>
                        <Col>
                            <ul>
                                <li> Home </li>
                                <li> Shop</li>
                                <li> About Us</li>
                                <li> Contact Us</li>
                            </ul>
                            <div className = "search">
                                <i className= "fa fa-search"></i>
                                <i className= "fa fa-shopping-basket"></i>
                            </div>
                        </Col>
                    </nav>
                </Row>
            </Container>
        </Navbar>
        
        
    )
}
