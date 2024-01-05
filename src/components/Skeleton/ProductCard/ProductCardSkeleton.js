import React from 'react'
import { Skeleton } from '@mui/material';

const ProductCardSkeleton = () => {
  return (
    <>
    
        <div className="cards" style={{display: "flex", flexDirection: "column", width: "100%" }}>
            <Skeleton variant="rectangular" height={118} style={{borderRadius:'6%', margin: '5px', width:"90%" }} />
            <Skeleton variant="text" width={100} height={40} style={{ width:"50%" }} />
            <Skeleton variant="text" width={100} height={20} />
        </div>
    
    </>
  )
}

export default ProductCardSkeleton