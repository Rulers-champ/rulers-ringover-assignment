import React from 'react';
import bg from './img/bg.jpg'

function Home()
{
    return (
        <div className='home-container'>
        <div className='left-home-block'>
           <img src={bg} />
        </div>
        <div className='right-home-block'>
           <h1>THE</h1>
           <h1>ULTIMATE</h1>
           <h1>SHOE</h1>
           <h1>STORE </h1>
        </div>

      </div>
        
        
    );
}

export default Home;