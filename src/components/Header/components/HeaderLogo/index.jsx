import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
    return (
        <div className='logo'>
            <Link to='/' style={{ color: "white" }}>ShopNow</Link>
        </div>
    )
}

export default HeaderLogo