import React from 'react'

function Item(props){
    return(
        <div id={`itemCon${props.id}`} className='itemCon'>
            <p className='itemName'>{props.name}</p>
            <p className='itemPrice'>{`R${props.price}`}</p>
            <button 
            name='editBtn' 
            className='editBtn' 
            onClick={(e)=>props.onClick(props.id, e)}>Edit</button>
            <button
            name='deleteBtn' 
            className='deleteBtn' 
            onClick={(e)=>props.onClick(props.id, e)}>Delete</button>
        </div>
    )

}


export default Item;
