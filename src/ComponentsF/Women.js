import React from 'react'
import { Link } from 'react-router-dom'

function Women(props){

    return(
        <div>
            <h1>Womens Page</h1>
            <Link to={'/women/women_dresses'}>
            <div className='categoryCon'>
            <h3 className='categoryHeading'>Dresses</h3>
            <div className='imgConFlex'>
                <div className='imgCon'>
                 <img src={props.images[120].url} alt={props.images[120].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[121].url} alt={props.images[121].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[122].url} alt={props.images[122].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[123].url} alt={props.images[123].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[124].url} alt={props.images[124].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[125].url} alt={props.images[125].name}/>
                 </div>
          </div>
            </div>
            </Link>
            <Link to={'/women/women_pants'}>
            <div className='categoryCon'>
            <h3 className='categoryHeading'>Pants</h3>
            <div className='imgConFlex'>
                <div className='imgCon'>
                 <img src={props.images[180].url} alt={props.images[180].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[181].url} alt={props.images[181].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[182].url} alt={props.images[182].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[183].url} alt={props.images[183].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[184].url} alt={props.images[184].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[185].url} alt={props.images[185].name}/>
                 </div>
          </div>
            </div>
            </Link>
            <Link to={'/women/women_shoes'}>
            <div className='categoryCon'>
            <h3 className='categoryHeading'>Shoes</h3>
            <div className='imgConFlex'>
                <div className='imgCon'>
                 <img src={props.images[220].url} alt={props.images[220].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[221].url} alt={props.images[221].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[222].url} alt={props.images[222].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[223].url} alt={props.images[223].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[224].url} alt={props.images[224].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[225].url} alt={props.images[225].name}/>
                 </div>
          </div>
            </div>
            </Link>
        </div>
    );
}


export default Women;
