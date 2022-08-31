import React from 'react'
import IntroImg from '../Assets/image.jpg'
import Image1 from '../Assets/image1.jpeg'
import Image2 from '../Assets/image2.jpeg'
import '../Styles/Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
    <div className='pro-heading'>
        <h3>02 PORTFOLIO</h3>
        <h5>MY LATEST WORK</h5>
      </div>
      <div className='port-img'>
        <img src={IntroImg} alt='' height='300px' width='300px'></img>
        <img src={Image1} alt='' height='300px' width='300px'></img>
        <img src={Image2} alt='' height='300px' width='300px'></img>
      </div>
    </div>
  )
}

export default Portfolio