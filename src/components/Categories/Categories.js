import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card.js'
import './Categories.css'


const Categories = () => {

    
    const productCategory = [
        {
            name: 'men'
        },
        {
            name: 'Women'
        },
        {
            name: 'Kids'
        },
        {
            name: 'Electronics'
        },
        {
            name: 'Footwear'
        },
        {
            name: 'Books'
        },

    ];
  return (
    <>
        
        <div className='category-container'>
            {productCategory.map(item =>
                <Link to={`product/category/${item.name}`}>
                    <Card>
                        {item.name}
                    </Card>
                </Link> 
            )}
        </div>
        
    </>
  )
}

export default Categories