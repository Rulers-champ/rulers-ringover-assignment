import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../Context'
import { calculateFilter } from '../utils/calculateFilter'
import search from '../components/img/searching.png';
import '../styling/Productblock.css';
import bag from './img/bag.png'
import unbag from './img/unbag.png'
import { calculateRating } from '../utils/calculateRating';



const Productblock=({product})=>{
   
    const {data,setdata}=useProducts()

    const starRating=calculateRating(product.rating)


    const isInCart=()=>{
        
       const res= data.cartProducts.find(item=>item.id===product.id)

       console.log('res:'+res)

       if (res)
       return true
       
       return false
    }

    const inCart=isInCart() 
     
    const cartHandler=()=>{


        if (inCart)
        {
           console.log("In cart") 
           const updatedCart=data.cartProducts.filter(item=>item.id!==product.id)
           setdata(prev=>({
               ...prev,
               cartProducts:updatedCart
           }))
           
        }
        else
        {
           console.log("Not in cart") 
           setdata(prev=>({
               ...prev,
               cartProducts:[...prev.cartProducts,product]
           })) 
        }

        console.log(data.cartProducts)       
    }
 
 
     return (
         <div class="product-container" >
           <img className="product-img" src={product.src}/>
           <div className="product-footer">
               <div className='product-flexbox'>
                    <Link to={`/product/${product.id}`}><h4>{product.name}</h4> </Link>
                    <img className='product-cart-icon' src={inCart?unbag:bag} onClick={cartHandler} />
               </div>
               <div className='product-flexbox'>
                   <h6>Rs {product.price}/-</h6>
                   <div>
                       <div className='stars-outer'>
                           <div className='stars-inner' style={{width:starRating}}></div>
                       </div>
                   </div>
               </div>
           </div> 
         </div>
     );

}
 







const ProductCatalogue = () => {

  const {data,setdata}=useProducts()
  const {redColor,blueColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000}=data

  useEffect(()=>{
    console.log('filter is called')  

    setdata((prev)=>(
        {
            ...prev,
            filteredProducts:calculateFilter(data)
        }
    ))

  },[redColor,blueColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000])
    

  return (
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
                    data.filteredProducts.map(item=>(
                        <Productblock key={item.id} product={item}  />
                    ))
                }
                

            </div>
        </div>
    
    </div>
  )
}

export default ProductCatalogue