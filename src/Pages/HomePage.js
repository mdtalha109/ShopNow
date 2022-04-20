import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories/Categories.js';
import { ListProducts } from '../actions/productAction.js';

import Product from '../components/Product'
import ProductCardSkeleton from '../components/Skeleton/ProductCard/ProductCardSkeleton.js';
import ProductSkeletonLoader from '../components/SkeletonLoader/productSkeletonLoader.js';
import CategoriesProduct from '../components/CategoriesProduct/CategoriesProduct.js';
import PopularCategories from '../components/PopularCategories/PopularCategories.js'

const HomeScreen = () => {

    const [product1, setProduct1] = useState()
    const [data1, setData1] = useState()

    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(ListProducts("", ""))
    }, [dispatch]);

    const productList = useSelector(state => state.productList)
    const {loading, product} = productList  
    console.log(productList, product)

    

    return (
       <>
            <Categories/>

            <div >
                {/* <h1 style={{fontWeight:700, fontSize: 'clamp(3rem,4vw,3rem)', letterSpacing: '0.055em', lineHeight:1.27, textAlign: 'center'}}>All dev product at one place. <br/>Buy Anything with ease.</h1> */}
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/31/a6a1bba2-d8af-4feb-881d-325bd8545c071617211308576-Dk-banner.jpg" style={{maxWidth:"100%"}}/>
            </div>

            {/* <PopularCategories/> */}

            
 
            <CategoriesProduct categoryName='Electronics' Limit='6'/>
            <CategoriesProduct categoryName='Footwear' Limit='6'/>

       </>
    )
}

export default HomeScreen


               
