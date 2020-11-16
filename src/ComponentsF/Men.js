import React from 'react'
import { Link } from 'react-router-dom'

function Men(props){

    return(
        <div>
            <h1>Mens Page</h1>
            <Link to={'/men/men_shirts'}>
            <div className='categoryCon'>
            <h3 className='categoryHeading'>Shirts</h3>
            <div className='imgConFlex'>
                <div className='imgCon'>
                 <img src={props.images[0].url} alt={props.images[0].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[1].url} alt={props.images[0].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[2].url} alt={props.images[0].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[3].url} alt={props.images[0].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[4].url} alt={props.images[0].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[5].url} alt={props.images[0].name}/>
                 </div>
          </div>
            </div>
            </Link>
            <Link to={'/men/men_pants'}>
            <div className='categoryCon'>
            <h3 className='categoryHeading'>Pants</h3>
            <div className='imgConFlex'>
                <div className='imgCon'>
                 <img src={props.images[40].url} alt={props.images[40].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[41].url} alt={props.images[41].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[42].url} alt={props.images[42].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[43].url} alt={props.images[43].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[44].url} alt={props.images[44].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[45].url} alt={props.images[45].name}/>
                 </div>
          </div>
            </div>
            </Link>
            <Link to={'/men/men_shoes'}>
            <div className='categoryCon'>
            <h3 className='categoryHeading'>Shoes</h3>
            <div className='imgConFlex'>
                <div className='imgCon'>
                 <img src={props.images[80].url} alt={props.images[80].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[81].url} alt={props.images[81].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[82].url} alt={props.images[82].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[83].url} alt={props.images[83].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[84].url} alt={props.images[84].name}/>
                 </div>
                 <div className='imgCon'>
                 <img src={props.images[85].url} alt={props.images[85].name}/>
                 </div>
          </div>
            </div>
            </Link>
        </div>
    );
}


export default Men;
