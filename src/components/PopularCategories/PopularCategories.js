import React from 'react'
import PopularCategoriesCard from './PopularCategoriesCard/PopularCategoriesCard'

const PopularCategories = () => {

    const PopularCategories = [
        {
            categoriesName: 'Electronics'
        },
        {
            categoriesName: 'Electronics'
        },
        {
            categoriesName: 'Electronics'
        },
        {
            categoriesName: 'Electronics'
        }
    ]


  return (
    <>  <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        {
            PopularCategories.map((categoryItem) => (
                <PopularCategoriesCard categoryName={categoryItem.categoriesName}/>
            ))
        }
        </div>
    </>
  )
}

export default PopularCategories