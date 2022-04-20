import React from 'react'

const PopularCategoriesCard = ({categoryName}) => {
  return (
    <div  style={{minWidth:"150px", height:"150px", backgroundColor:"red",  margin:"10px"}}>
      {categoryName}
      </div>
  )
}

export default PopularCategoriesCard