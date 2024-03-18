import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design-1-2048x1152.jpg"/>
            </div>
            <ul className="nav-items">
                <li>
                    <Link to='/'>Home</Link>
                    </li>
                <li>
                    {/* by using anchor tag it refresh the page instead we can use link tag provided by react router dom */}
                    <Link to='/about'>About US</Link> 
                    
                    </li>
                
                <li>
                    <Link to='/contact'> Contact US </Link></li>
            </ul>

        </div>
    )
}
export default Header