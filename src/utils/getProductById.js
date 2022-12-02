export const getProductById=(data,id)=>{

    const product=data.filteredProducts.find(item=>item.id==id)

    return product
}