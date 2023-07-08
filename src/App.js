import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Footer from './Components/Footer'

const App = () => {

  const [show, setShow] = useState(true);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  function handleClick(item){
    setCart([...cart,item])
  }

  function handleChange(item,d){
    let arr = cart;
    let ind = cart.indexOf(item);
    arr[ind].amount += d;
    if (arr[ind].amount===0) arr[ind].amount=1
    setCart([...arr]);
  }

  document.title = 'Shop😀More';


  return (
    <div>
      <Navbar setShow={setShow} setSearch={setSearch} size={cart.length}/>
      {(show)?(<Home handleClick={handleClick} search={search}/>):(<Cart cart={cart} search={search} handleChange={handleChange} setCart={setCart}/>)}
      <Footer/>
    </div>
  )
}

export default App