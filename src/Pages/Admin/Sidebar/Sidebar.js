import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  const sidebarList = [
   
    {
      name: 'User',
      to:'/admin/userlist'
    },
    {
      name: 'Add Product',
      to:'/admin/productlist'
    },
    {
      name: 'Orders',
      to: '/admin/orderlist'
    }
  ]

  const [activeList, setActiveList] = useState('All')
  return (
    <>
        <div className='sidebar'>
            <ul>
                {/* <li className='active'><Link to='/admin/userlist'>Order</Link></li>
                <li><Link to='/admin/userlist'>Users</Link></li>
                <li><Link to='/admin/productlist'>Add Product</Link> </li> */}
                {
                 sidebarList.map((item) => <li className={item.name === activeList ? 'active': '' } onClick={()=>setActiveList(item.name) }><Link to={item.to}>{item.name}</Link></li>)
                }
                
                
            </ul>
        </div>

    </>
  )
}

export default Sidebar