import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ListProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product';
import ProductCardSkeleton from '../components/Skeleton/ProductCard/ProductCardSkeleton';
import ProductSkeletonLoader from '../components/SkeletonLoader/productSkeletonLoader';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ProductNotFound from '../components/ProductNotFound/ProductNotFound.js'



const SeachPage = () => {

  const dispatch = useDispatch()

    const [searchParams] = useSearchParams();
    const searchKeyword = searchParams.get('q')

    useEffect(()=> {
      dispatch(ListProducts(searchKeyword))
  }, [dispatch, searchKeyword]);

  const productList = useSelector(state => state.productList)
  const {loading, product} = productList
    
  return (
    <>
          {<div className="container-product_card">
          {loading ? <LoadingSpinner/> : ""}
                {product && product.map(product => (
                        <Product product = {product} isLoading= {loading}/>     
                ))}

                { 

                //Product not found
                  (product && productList.product.length == 0)
                  ? 
                  <ProductNotFound/>
                  : ''
                }
            </div>
            }
    </>
  )
}

export default SeachPage