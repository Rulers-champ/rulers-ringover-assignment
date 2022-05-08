import React, { useState } from 'react';
import Shoes from './Shoes';

import filter from './img/filter.png';
import search from './img/searching.png';
import location from './img/location.png';
import calendar from './img/calendar.png';
import bag from './img/bag.png';
import checkmark from './img/checkmark.png';

import Productblock from './Productblock';
import './Store.css';





function Store()
{
    const [products,setproducts]=useState(Shoes);
    const [cartItem,setcartItem]=useState([]);
    // const [minPrice,setminPrice]=useState([1000000,1000000,1000000]);
    // const [maxPrice,setmaxPrice]=useState([0,0,0]);
    const [checkColor,setcheckColor]=useState([false,false,false,false,false]);
    const [checkbox,setcheckbox]=useState([false,false,false]);
    

    var minPrice=[1000000,1000000,1000000],maxPrice=[0,0,0],target=["blue","red","white","green","black"],
    checktarget=["check1","check2","check3"],checkvalue=[{low:1500,high:4000},{low:4001,high:7000},{low:7001,high:1000000}];
    var color,type;


    function adCart(key)
    {
        console.log("add was called");
        const note=products.filter((item,index)=>{return item.id===key});
        console.log(note);

        setcartItem((prev)=>{
            return [...prev,note[0]];
        });
    }


    function deleteCart(key)
    {
        //console.log("delete was called");
        setcartItem(prevNote=>{
            return prevNote.filter((item,index)=>{
                return item.id!==key;
            });
        });
    };


    function handleCheck(event)
    {
       const name=event.target.name;
       let idx;

       if (name==='price1')
       idx=0;
       else if (name==='price2')
       idx=1;
       else
       idx=2;

       let arr=[...checkbox];
       arr[idx]=!arr[idx];

       setcheckbox(arr);



       
        

    }
    


    function handleColor(event)
    {
       const name=event.target.name;
       let  idx;
       
       if (name==='blue')
       idx=0;
       else if (name==='red')
       idx=1;
       else if(name==='white')
       idx=2;
       else if (name==='green')
       idx=3;
       else
       idx=4;

    //    console.log(name+" "+idx);
    //    console.log(checkColor[idx]);

       console.log("color"+minPrice+" "+maxPrice);
       
       let arr=[...checkColor];
       arr[idx]=!arr[idx];

       setcheckColor(arr);

       console.log(checkColor);
       
       
    }


    function handleFilter()
    {
        console.log("Apply was hit");
        console.log(checkbox+" "+checkColor);

        let lowPrice=1000000,highPrice=0;

        for (let i=0;i<3;++i)
        {
            if (checkbox[i])
            {
                lowPrice=Math.min(lowPrice,checkvalue[i].low);
                highPrice=Math.max(highPrice,checkvalue[i].high);
            }
        }

        if (lowPrice===1000000)
         lowPrice=0;
        if (highPrice===0)
         highPrice=1000000;


        setproducts(prev=>{
            return Shoes.filter((item,idx)=>{
                
                let flag=false,cnt=0;

                if (item.price<lowPrice || item.price>highPrice)
                return false;

 
                for (let i=0;i<5;++i)
                {
                    if (checkColor[i])
                    cnt++;
                    if (checkColor[i] && item.color===target[i])
                    {
                        flag|=true;
                    }
                }
                

                if (cnt===0)
                return true;


                return flag;

            });
        });
    };
    
    

    return (
        <div className='store-wrapper'>
           
           <div className='store-block left-block'>
              <div className='block-topbar' >
                  <h2>FILTERS</h2>
                  <img src={filter} className="store-icon" />
              </div>

              <h2 className='store-subheading'>Cost</h2>
              <input type="checkbox" id="price1" name="price1" value="" onChange={handleCheck} />
              <label>Rs 1500-4000</label>
              <br />
              <input type="checkbox" id="price2" name="price2" value="" onChange={handleCheck}/>
              <label>Rs 4001-7000</label>
              <br />
              <input type="checkbox" id="price3" name="price3" value="" onChange={handleCheck}/>
              <label>Rs 7000+</label>
              
              <h2 className='store-subheading'>Colour</h2>
              <button className='color-btn color-btn-1' name="blue" onClick={handleColor}>.{checkColor[0]?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-2' name="red"  onClick={handleColor}>.{checkColor[1]?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-3' name="white" onClick={handleColor}>.{checkColor[2]?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-4' name="green" onClick={handleColor}>.{checkColor[3]?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-5' name="black" onClick={handleColor}>.{checkColor[4]?<img src={checkmark} />:<></> }</button>
              
              <h2 className='store-subheading'>Design Templates</h2>
              <input type="checkbox" />
              <label >2</label>
              <br/>
              <input type="checkbox" />
              <label >3</label>
              <br/>
              <input type="checkbox" />
              <label >3+</label>
              

              <h2 className='store-subheading'>Type</h2>
              <input type="checkbox" />
              <label >Loafers</label>
              <br/>
              <input type="checkbox" />
              <label >Sneakers</label>
              
              <div className='block-footer'>
               <button className='store-btn' onClick={handleFilter}>Apply </button>
              </div>
            </div>

            <div className='store-block center-block'>
               <div className='block-topbar' >
                  <h2>SHOES</h2>
                  <div>
                    <img src={search} className="store-icon" />
                    <button className='store-btn'>Sort By</button>
                  </div>                  
               </div>
               
               <div className='block-flow'>
                    <div className='center-block-wrapper'>
                        {
                            products.map(item=>(
                                <Productblock id={item.id} img={item.src} rating={item.rating} price={item.price} adCart={adCart} />
                            ))
                        }
                        

                    </div>
               </div>
               

            </div>

            <div className='store-block right-block'>
                <div className='block-topbar' >
                  <h2>CART</h2>
                  
                  <img src={bag} className="store-icon" />
                                    
                </div>


                <div className='cart-flow' >
                    {
                        cartItem.length===0?<p className='cart-empty-text'>What's stopping You ?</p>:<></>
                      }
                    <div className='cart-block-wrapper'>
                     
                        {
                            cartItem.map(item=>(
                                <Productblock id={item.id} img={item.src} rating={item.rating} price={item.price}  deleteCart={deleteCart} check/>
                            ))
                        }
                        

                    </div>
               </div>

                <div className='block-footer'>
                  <a href='#'><img className='store-icon' src={location} />Home</a>
                  <a href='#'><img className='store-icon' src={calendar} />Select Date</a>
                  <br />

                  <button className='store-btn'>Order Now</button>                                       
 
                </div>    
              
            </div>

        </div>
    );
}

export default Store;