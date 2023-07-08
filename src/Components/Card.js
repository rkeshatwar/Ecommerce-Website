import React, { useState } from 'react'
import './Card.css'

const Card = ({item, handleClick}) => {

    const{title, description, price, image, category} = item;
    const[open, setOpen] = useState(false);

  return (
    <div className='Cards'>
        <img src={image} alt='' height={'200px'} width={'200px'}></img>
        <p>{title}</p>
        <h1>{category}</h1>
        <p>${price}</p>
        <button style={{border:'0', backgroundColor:'transparent', textDecoration:'underline', paddingBottom:'3px'}} onClick={()=>setOpen(true)}>Read More...</button>
        {open && (
            <div>
            <p>{description}</p>
            <button onClick={()=>setOpen(false)}>Close</button> 
            </div>     
        )}
        <br/>
        <button onClick={()=>handleClick(item)}>Add To Cart</button>
    </div>
  )
}

export default Card