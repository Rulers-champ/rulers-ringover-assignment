import React from 'react';
import shoe from './img/Black-1.jpeg';
import './Productblock.css';
import cancel from './img/cancel.png';

function Productblock(props)
{

   const starPerc=(props.rating/5)*100;
   const starPercRounded=`${Math.round(starPerc/10)*10}%`;

   
   function handleAdd()
   {
       if(!props.check)
       props.adCart(props.id);
   }

   function handledelete()
   {
       if(props.check)
       props.deleteCart(props.id);
   }

    return (
        <div class="product-container" onClick={handleAdd}>
          <img className="product-img" src={props.img}/>
          {props.check?<img className='cancel-icon' src={cancel} onClick={handledelete} />:<></>}
          <div className="product-footer">
              <h4>KSL 01</h4>
              <div className='product-flexbox'>
                  <h6>Rs {props.price}/-</h6>
                  <div>
                      <div className='stars-outer'>
                          <div className='stars-inner' style={{width:starPercRounded}}></div>
                      </div>
                  </div>
              </div>
          </div> 
        </div>
    );
}

export default Productblock;