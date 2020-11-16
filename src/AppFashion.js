import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './ComponentsF/Header'
import Nav from './ComponentsF/Nav'
import Home from './ComponentsF/Home'
import Men from './ComponentsF/Men'
import MenShirts from './ComponentsF/Men_shirts'
import MenPants from './ComponentsF/Men_pants'
import MenShoes from './ComponentsF/Men_shoes'
import Women from './ComponentsF/Women'
import WomenDresses from './ComponentsF/Women_dresses'
import WomenPants from './ComponentsF/Women_pants'
import WomenShoes from './ComponentsF/Women_shoes'
import ProductPage from './ComponentsF/ProductPage'
import Images from './image_directory'

function AppFashion(){
       
    const [imageDB, setImageDB] = useState(Images);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);    
    
    function addToCartBtn(product){
        setCartItems([...cartItems, product[0]]);
    }
    
    function clearCartBtn(){
        setCartItems([]);
        setCartTotal(0);
    }
    
    function updateTotalCartBtn(){
        if(cartItems){
            let curCartItems = [...cartItems];
            let total = 0;
        
            curCartItems.forEach(item=> {
                total += item.price
            });
            setCartTotal(total);
        }
    }
    
    function removeCartItem(index){
        let prevCartItems = [...cartItems];
        prevCartItems.splice(index, 1);
        setCartItems(prevCartItems);
    }
        
    return(
        <Router>
        <div>
            <Header 
            clearCartBtn={clearCartBtn}
     removeCartItem={removeCartItem}
            cartItems={cartItems}
            cartTotal={cartTotal}
            updateTotal={updateTotalCartBtn}/>
            <Nav/>
            <Switch>
            <Route path='/' exact component={Home}/>
            
            <Route path='/men' exact render={()=><Men images={imageDB}/>}/>
            
            <Route path='/men/men_shirts' exact render={({match})=>
            <MenShirts images={imageDB}
            info={match}             
             />}/>
            
            <Route path='/men/men_pants' exact render={()=>
            <MenPants images={imageDB} 
             />}/>
            
            <Route path='/men/men_shoes' exact render={()=>
            <MenShoes images={imageDB} 
            />}/>
            
            <Route path='/women' exact render={()=>
            <Women images={imageDB}/>}/>
            
            <Route path='/women/women_dresses' exact render={()=>
            <WomenDresses images={imageDB} 
            />}/>
            
            <Route path='/women/women_pants' exact render={()=>
            <WomenPants images={imageDB} 
             />}/>
            
            <Route path='/women/women_shoes' exact render={()=>
            <WomenShoes images={imageDB} 
             />}/>
            
            <Route path='/productPage/:name'
            exact render={({match})=> <ProductPage match={match}
            addToCart={addToCartBtn}
            />}/>
            
            </Switch>
        </div>
        </Router>
    );


}



export default AppFashion;
