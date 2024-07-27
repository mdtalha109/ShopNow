import React from 'react'

const EmptyCart = () => {
  return (
    <div style={{ display: 'flex', width: "100%", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        style={{
          width: '35%'
        }}
        alt='product_image'
      />
      <h4>Opps! Your cart is empty</h4>

    </div>
  )
}

export default EmptyCart