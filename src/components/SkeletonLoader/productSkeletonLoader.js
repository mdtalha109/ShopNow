import React from 'react'
import ProductCardSkeleton from '../Skeleton/ProductCard/ProductCardSkeleton'
import style from './index.module.css'

const ProductSkeletonLoader = () => {
  return (
    <>
        <div className={style.product_skeleton_container}>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        </div>
     
       
                
    </>
  )
}

export default ProductSkeletonLoader