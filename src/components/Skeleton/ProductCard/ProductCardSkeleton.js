import React from 'react'
import { Skeleton } from '@mui/material';

const ProductCardSkeleton = () => {
  return (
    <>
    
        <div className='cards'>
            <Skeleton variant="rectangular" width={140} height={118} style={{borderRadius:'6%', margin: '5px'}} />
            <Skeleton variant="text" width={100} height={40} />
            <Skeleton variant="text" width={100} height={20} />
        </div>
    
    </>
  )
}

export default ProductCardSkeleton