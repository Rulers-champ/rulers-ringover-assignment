import React, { createContext, useContext, useState } from 'react'
import shoes from './components/Shoes'

const ProductContext=createContext();

export const useProducts=()=>useContext(ProductContext)

const initial={

    products :[...shoes],
    filteredProducts:[...shoes],
    cartProducts:[],
    blueColor:false,
    redColor:false,
    whiteColor:false,
    greenColor:false,
    blackColor:false,
    priceAbove1500:false,
    priceAbove4000:false,
    priceAbove7000:false
}

export const Context = ({children}) => {

    const [data,setdata]=useState(initial) 


  return (
    <ProductContext.Provider value={{data,setdata}} >{children}</ProductContext.Provider>
  )
}

