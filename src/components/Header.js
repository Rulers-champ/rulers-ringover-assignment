import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/websitelogo.png';
import userlogo from './img/profile-user.png';
import '../styling/Header.css';

function Header()
{
  
    return <div className='navbar'>

            <img className='main-logo-img' src={logo} />

            <div>
                <ul className='navbar-link' >
                    <Link to="/"><li>HOME</li></Link> 
                    <Link to="/journey"><li>THE JOURNEY</li></Link>
                    <Link to="/team"> <li>TEAM</li></Link>
                    <Link to="/store"><li>STORE</li></Link>
                    <Link to="/contacts"> <li>CONTACT</li></Link>                      
                    
                   
                    
                   
                </ul>
                
            </div>

            <div>
                <ul className='profile-link'>
                    <li><a href="#"><img  className='logo-img' src={userlogo} /></a></li>
                    <li>GAGAN</li>
                </ul>
            </div>
             
           </div>;

}

export default Header;