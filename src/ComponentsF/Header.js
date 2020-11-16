import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

function Header(props){

    return(
       <div>
        <header>
            <div className='heroCon'>
                <h1 className='heroHeading'>Fashion</h1>
            </div>
        </header>
        <Cart
       clearCartBtn={props.clearCartBtn}
         cartItems={props.cartItems}
         removeCartItem={props.removeCartItem}
         cartTotal={props.cartTotal}
         updateTotal={props.updateTotal}/>
        </div>
    );

}



export default Header;
