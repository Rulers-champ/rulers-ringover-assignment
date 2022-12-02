export const calculateFilter=(data)=>{
     
    const {redColor,blueColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000,products}=data
    
    const arr=products.filter((item)=>{

        var flag1=false,flag2=false
        
        //Color Filter
        if (redColor)
        flag1|=(item.color==='red')

        if (blueColor)
        flag1|=(item.color==='blue')

        if (whiteColor)
        flag1|=(item.color==='white')

        if (greenColor)
        flag1|=(item.color==='green')

        if (blackColor)
        flag1|=(item.color==='black')

        if (!redColor && !blueColor && !whiteColor && !greenColor && !blackColor)
        flag1=true

        
        //price Filter
        
        if (priceAbove1500)
        flag2|=(item.price>=1500 && item.price<4000)

        if (priceAbove4000)
        flag2|=(item.price>=4000 && item.price<7000)

        if (priceAbove7000)
        flag2|=(item.price>=7000)


        if (!priceAbove1500 && !priceAbove4000 && !priceAbove7000)
        flag2=true 

        return flag1 & flag2
    })
    
    if (arr.length===0)
    return products

    return arr    
}