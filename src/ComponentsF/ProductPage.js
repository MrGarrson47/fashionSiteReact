import React from 'react'
import Images from '../image_directory'

function ProductPage(props){
const product = Images.filter(item=> item.name === props.match.params.name);
console.log(product);
    return(
        <div>
            <h1>{product[0].name}</h1>
            <img src={product[0].url}/>
            <p>R{product[0].price} Brand: {product[0].brand}</p>
            <p className='addToCartBtn' onClick={()=>props.addToCart(product)}>Add To Cart</p>
        </div>
    );
}




export default ProductPage;
