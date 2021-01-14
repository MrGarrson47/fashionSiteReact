import React from 'react'
import cart from '../cart.png'
import CartItem from './CartItem'

function Cart(props){

    function revealCart(){
        document.querySelector('.cartCon').classList.toggle('revealCart');
    }
    return(
        <div>
            <div className='cartBtn' onClick={revealCart}>
                <img className='cartPic' src={cart}/>
            </div>
            <div className='cartCon'>
                <p className='cartXBtn' onClick={revealCart}>X</p>
                <p className='cartTotal'>R{props.cartTotal}</p>
                <CartItem cartItems={props.cartItems}
                removeCartItem={props.removeCartItem}/>         
                <div className='cartConBtnsCon'>       
                <p className='cartClearBtn' onClick={props.clearCartBtn}>Clear cart</p>
                <p className='cartUpdateTotalBtn' onClick={props.updateTotal}>Update Total</p>
                </div>
            </div>
        </div>
    );
}



export default Cart;
