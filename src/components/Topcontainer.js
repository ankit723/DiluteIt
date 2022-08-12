import React from 'react';
import {Link} from 'react-router-dom';
import facebook from './appicons/facebook.png';
import twitter from './appicons/twitter.svg';
import instagram from './appicons/instagram.svg';
import github from './appicons/github.svg';
import dribble from './appicons/dribble.svg';

function showfb(){
    let fb = "FACEBOOK";
    return fb;
}


export function Topcontainer() {
    return(
        <div className="Topcontainer">
            <h4>WELCOME TO DILUTEIT</h4>
            <p>
            We are a creative group <br/>
            of people who design <br />
            influential brands and <br />
            digital experiences.
            </p>

            <div className='cont-button'>
                <ul>
                    <li><Link to="/">START A PROJECT</Link></li>
                    <li><Link to="/">MORE ABOUT US</Link></li>
                </ul>
            </div>
            <div className='social_adder'>
                <ul>
                    <li><Link to="/"><img src={facebook} alt="" /></Link></li>
                    <li><Link to="/"><img src={twitter} alt="" /></Link></li>
                    <li><Link to="/"><img src={instagram} alt="" /></Link></li>
                    <li><Link to="/"><img src={github} alt="" /></Link></li>
                    <li><Link to="/"><img src={dribble} alt="" /></Link></li>
                </ul>
            </div>
        </div>
    )
}