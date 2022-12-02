import React from 'react';

import fb from './img/facebook.png';
import ln from './img/linkedin.png';
import m from './img/medium.png';

import '../styling/MemberBlock.css';


function MemberBlock(props)
{
    return <div className='member-block'>
         <img className='member-block-img' src={props.src} />
         <h3>{props.name}</h3>
         <h5>{props.role}</h5>
         
         <div className='footer-social'>
            <a href="#"><img className='social-img' src={ln} /></a>
            <a href="#"><img className='social-img' src={m} /></a>
            <a href="#"><img className='social-img' src={fb} /></a>
         
        </div>
        
        
    </div>;
}

export default MemberBlock;