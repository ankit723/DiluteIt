import React from 'react';
import { Link } from 'react-router-dom';


function close_nav(){
    document.getElementById("floating_navbar").style.width="0";
}


export function Extreme(){
    return (
        <nav className='navbar'>
          <div class="logo_name">
              <h2>DiluteIT.</h2>
          </div>

          <header className='navbar_floating' id='floating_navbar'>
                <button onClick={close_nav} className='close_nav'>&times;</button>
                <div className='navbar_floating_container'>
                    <h7>NAVIGATION</h7>
                    <ul>
                        <li><Link to="/" className='navbarelements'>Home</Link></li>
                        <li><Link to="/" className='navbarelements'>About</Link></li>
                        <li><Link to="/" className='navbarelements'>Services</Link></li>
                        <li><Link to="/" className='navbarelements'>Works</Link></li>
                        <li><Link to="/" className='navbarelements'>Clients</Link></li>
                        <li><Link to="/" className='navbarelements'>Contact</Link></li>
                        <li><Link to="/" className='navbarelements'>Blog</Link></li>
                    </ul>
                    <p>
                        We are a creative group <br/>
                        of people who design <br />
                        influential brands and <br />
                        digital experiences.
                        
                    </p>
                </div>
            </header>
        </nav>
    )
}