import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default function NavBar(){
 
        return(
            <div className="landingDiv">
              <ul>
                 <Link to={`/`}><li>Home</li></Link>
                 <Link to={`/about`}><li>About</li></Link>
                 <Link to={`/cart`}><li>Your Cart</li></Link>
                
                  
             </ul>
                
            </div>
        )
    }

