import React from 'react'

function CartItem(props){

    return(
        <div>
            {props.cartItems ? props.cartItems.map(item=> <div className='cartItemCon' data-index={props.cartItems.indexOf(item)}><p className='cartItem'>{item.name} R{item.price} </p><span className='cartItemXBtn' onClick={()=>props.removeCartItem(props.cartItems.indexOf(item))}>X</span></div>) : <p>cart is empty</p>}
        </div>
    );
}



export default CartItem;
