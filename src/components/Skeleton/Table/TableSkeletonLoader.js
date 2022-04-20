import React from 'react'
import { Skeleton } from '@mui/material';

const TableSkeletonLoader = () => {
  return (
    <>
        <Skeleton variant="rectangular" width={1050} height={40} />
        <br></br>
        <Skeleton variant="rectangular" width={1050} height={20} />
        <Skeleton variant="rectangular" width={1050} height={20} />
        <Skeleton variant="rectangular" width={1050} height={20} />
       
        
        
        
    </>
  )
}

export default TableSkeletonLoader


