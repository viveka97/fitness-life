import React from 'react'
import '../product.css';


export default function Header(){
    return(
        <nav>
            <div className= "logo">Fitness Life</div>
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
        </nav>
    )
}
