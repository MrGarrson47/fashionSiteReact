import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'

function WomenPants(props){

const [filteredImages, setFilteredImages] = useState(props.images);
    const [brands, setBrands] = useState({brand1: true, brand2: true, brand3: true, brand4: true});
    const [priceRange, setPriceRange] = useState({min: 100, max: 400});
    const [sortBy, setSortBy] = useState('Price: low to high');

    const category = 'women';
    const subCategory = 'pants';
    const menImages = props.images.filter(item=> item.category === category && item.sub_category === subCategory);
    const filteredImgs = filteredImages.filter(item=> item.category === category && item.sub_category === subCategory);

function sortByFilter(e){
        if(e.target.value === 'Brands'){
            setSortBy('Brands');
        }
        else if(e.target.value === 'Price: low to high'){
            setSortBy('Price: low to high');
        }
        else{
            setSortBy('Price: high to low');
        }
    }
    
     function handleClickFilterOptions(e){
         if(e.target.className === 'brand'){
             setBrands({
                 ...brands,
                 [e.target.name]: e.target.checked
             });
         } else{
             let left = document.querySelector('.priceLeft').value;
             let right = document.querySelector('.priceRight').value;
             if(left.value >= right.value){
                 setPriceRange({min: right, max: left});
                 return;
             }
             setPriceRange({min: left, max: right});
         }
     }
     
     function handleClickResetBrands(){
         setBrands({
             brand1: true,
             brand2: true,
             brand3: true,
             brand4: true
         });
         setPriceRange({min: 100, max: 400});
     }
     
     function handleClickSearchFiltered(db, cat, subCat){
     
        let brandsState = [brands.brand1, brands.brand2, brands.brand3, brands.brand4];
        let listOfCheckedBrands = [];
        let singleCheckedBrand = [];
        for(let i= 0; i < brandsState.length; i++){
            if(brandsState[i] === true){
                singleCheckedBrand = menImages.filter(item=> item.category === cat && item.sub_category === subCat && item.brand === i+1);
                listOfCheckedBrands = [...listOfCheckedBrands, ...singleCheckedBrand];
            }
        }

        let filteredList = listOfCheckedBrands.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);
        if(sortBy === 'Brands'){
            filteredList= filteredList.sort((a,b)=> a.brand - b.brand);
        }
        else if(sortBy === 'Price: low to high'){
            filteredList= filteredList.sort((a,b)=> a.price - b.price);
        }
        else if(sortBy === 'Price: high to low'){
            filteredList= filteredList.sort((a,b)=> b.price - a.price);
        }
        
        setFilteredImages(filteredList);        
    }

   
    return(
        <div>
            <Filter reset={handleClickResetBrands} 
            filter={handleClickSearchFiltered} 
            db={menImages} 
            cat={category} 
            subCat={subCategory} 
            handleClickFilterOptions={handleClickFilterOptions}  
            check={brands}
            priceRange={priceRange}
            sortByFilter={sortByFilter}
            sortBy={sortBy}/>
            <h1>Women Pants Page</h1>
            <div className='conFlex'>
                {filteredImgs.map(item=> 
                <div className='card'>
                    <Link to={`/productPage/${item.name}`}>
                    <div className='cardImg'>
                        <img className='img' src={item.url} alt={item.name}/>
                    </div>
                    </Link>
                    <div className='cardInfo'>
                        <p>R{item.price} Brand: {item.brand}</p>
                    </div>
                </div>
                )}
            </div>        
        </div>
    );
}



export default WomenPants;
