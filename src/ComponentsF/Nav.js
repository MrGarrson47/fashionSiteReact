import React from 'react'
import { Link } from 'react-router-dom'


function Nav(){
    
    return(
        <nav>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/men'}><li>Men</li></Link>
                <Link to={'/women'}><li>Women</li></Link>
            </ul>
        </nav>
    );

}



export default Nav;
