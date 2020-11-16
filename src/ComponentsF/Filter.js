import React from 'react'



function Filter(props){
    
    
    function revealFilter(){
     document.querySelector('.filterCon').classList.toggle('revealFilterCon');
    }
    return(
        <div>
            <div className='filterBtn' onClick={revealFilter}>
                <p className='filterBtnText'>filter</p>
            </div>
            <div className='filterCon'>
                <div className='filterConInner'>
                    <p className='filterXBtn' onClick={revealFilter}>X</p>
                    <div className='priceFilterCon'>
                    <label>From</label>
                    <select className='priceLeft' 
                    name='priceLeft'
                    value={props.priceRange.min} 
                    onChange={(e)=>props.handleClickFilterOptions(e)}>
                        <option name='priceLeft' value ='100'>R100</option>
                        <option name='priceLeft' value ='200'>R200</option>
                        <option name='priceLeft' value ='300'>R300</option>
                        <option name='priceLeft' value ='400'>R400</option>
                    </select>
                    <label>To</label>
                    <select name='priceRight' 
                    className='priceRight'
                    value={props.priceRange.max}
                    onChange={(e)=>props.handleClickFilterOptions(e)}>
                        <option name='priceRight' value ='400'>R400</option>
                        <option name='priceRight' value ='300'>R300</option>
                        <option name='priceRight' value ='200'>R200</option>
                        <option name='priceRight' value ='100'>R100</option>
                    </select>
                    </div>
                    <div className='sortByFilterCon'>
                        <label>Sort by</label>
                        <select value={props.sortBy} onChange={(e)=> props.sortByFilter(e)}>
                            <option name='sortLowToHigh' value='Price: low to high'>Price: low to high</option>
                            <option name='sortHighToLow' value='Price: high to low'>Price: high to low</option>
                            <option name='sortBrands' value='Brands'>Brands</option>
                        </select>
                    </div>
                    <div className='brandFilterCon'>
                        <label>Brand 1</label>
                        <input type='checkbox'
                        name='brand1' 
                        checked={props.check.brand1}
                        className='brand'
                        onClick={(e)=> props.handleClickFilterOptions(e)}  
                        />
                        <label>Brand 2</label>
                        <input type='checkbox' 
                        name='brand2'
                        checked={props.check.brand2}
                        className='brand'
                       onClick={(e)=> props.handleClickFilterOptions(e)}  
                        />
                        <label>Brand 3</label>
                        <input type='checkbox' 
                        name='brand3'
                        checked={props.check.brand3}
                        className='brand'
                        onClick={(e)=> props.handleClickFilterOptions(e)}  
                        />
                        <label>Brand 4</label>
                        <input type='checkbox' 
                        name='brand4'
                        checked={props.check.brand4}
                        className='brand'
                       onClick={(e)=> props.handleClickFilterOptions(e)}  
                        />
                    </div>
                </div>
                <div className='filterConBtns'>
                <p className='searchFilterBtn' onClick={()=> props.filter(props.db, props.cat, props.subCat)}>Filter</p>
                <p className='resetFilterBtn' onClick={props.reset}>Reset filters</p>
                </div>
            </div>
        </div>
    );

}


export default Filter;
