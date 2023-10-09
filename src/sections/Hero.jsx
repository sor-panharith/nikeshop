import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
// import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
    <section 
    id='Home'
    className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className=' relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28'>
        <p>Our summer Colletion</p>
      <h1>
        <span>The new arrival</span>
        <span>Nike Shoes</span>
      </h1>
      <p>divcover stylish nike arrival quality comfort, and innovation for active life</p>
      <Button label="Shop Now" iconUrl={arrowRight} />
      </div>


    </section>
    )
}

export default Hero