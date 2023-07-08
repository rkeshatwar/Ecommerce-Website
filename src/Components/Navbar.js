import React from 'react'
import './Navbar.css'

const Navbar = ({setShow,size,setSearch}) => {
  return (
    <div>
        <nav>
            <div className='navLink' onClick={()=>setShow(true)}><h3>Shop😀More</h3></div>
            <div className='navLink'>Home</div>
            <div className='navLink'>Contact</div>
            <div className='navLink'>Service</div>
            <div className='navLink'>🔎<input onChange={(e)=>setSearch(e.target.value)} type='text'/></div>
            <div className='navLink' onClick={()=>setShow(false)}>Cart🛒{size}</div>
        </nav>
    </div>
  )
}

export default Navbar