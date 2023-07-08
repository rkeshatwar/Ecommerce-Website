import React from 'react'
import Data from './Data'
import Card from './Card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css'

const Home = ({handleClick,search}) => {
  return (
    <div className='Home'>
      <Carousel>
      {Data.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
        return(
          <header className='homeHeader' style={{height:'600px', width:'80%', margin:'auto'}} key={item.id}>
          <div className='headerdiv'>
          <img src={item.image} alt=''></img>
          <p className='legend'>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.rating.rate}<i class="fa-sharp fa-solid fa-star" style={{color: '#f5d400'}}></i></p>
          </p>
          </div>
          </header>
        )
      })}
      </Carousel>     

        <section className='Sec'>
            {Data && Data.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
                return(
                    <Card item={item} handleClick={handleClick} key={item.id}/>
                )
            })}
        </section>
    </div>
  )
}

export default Home