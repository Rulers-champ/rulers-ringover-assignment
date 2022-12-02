import React, { useState } from 'react'
import filter from '../components/img/filter.png'
import checkmark from '../components/img/checkmark.png';
import { useProducts } from '../Context';


const Filter = () => {

  const {data,setdata}=useProducts()
  const {blueColor,redColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000,filteredProducts}=data




  return (
    <>
        <div className='store-block left-block'>
              <div className='block-topbar' >
                  <h2>FILTERS</h2>
                  <img src={filter} className="store-icon" />
              </div>

              <h2 className='store-subheading'>Cost</h2>
              <input type="checkbox" id="price1" name="price1" value="" checked={priceAbove1500} onChange={()=>setdata(prev=>({...prev,priceAbove1500:!prev.priceAbove1500}))} />
              <label>Rs 1500-4000</label>
              <br />
              <input type="checkbox" id="price2" name="price2" value="" checked={priceAbove4000} onChange={()=>setdata(prev=>({...prev,priceAbove4000:!prev.priceAbove4000}))}/>
              <label>Rs 4001-7000</label>
              <br />
              <input type="checkbox" id="price3" name="price3" value="" checked={priceAbove7000} onChange={()=>setdata(prev=>({...prev,priceAbove7000:!prev.priceAbove7000}))}/>
              <label>Rs 7000+</label>
              
              <h2 className='store-subheading'>Colour</h2>
              <button className='color-btn color-btn-1' name="blue" onClick={()=>setdata(prev=>({...prev,blueColor:!prev.blueColor}))}>.{blueColor?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-2' name="red"  onClick={()=>setdata(prev=>({...prev,redColor:!prev.redColor}))}>.{redColor?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-3' name="white" onClick={()=>setdata(prev=>({...prev,whiteColor:!prev.whiteColor}))}>.{whiteColor?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-4' name="green" onClick={()=>setdata(prev=>({...prev,greenColor:!prev.greenColor}))}>.{greenColor?<img src={checkmark} />:<></> }</button>
              <button className='color-btn color-btn-5' name="black" onClick={()=>setdata(prev=>({...prev,blackColor:!prev.blackColor}))}>.{blackColor?<img src={checkmark} />:<></> }</button>
              
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
               <button className='store-btn' onClick={()=>setdata(prev=>({...prev,filteredProducts:prev.products,blueColor:false,redColor:false,whiteColor:false,greenColor:false,blackColor:false,priceAbove1500:false,priceAbove4000:false,priceAbove7000:false}))}> Clear Filter </button>
              </div>
        </div>
    </>
  )
}

export default Filter