import React from 'react'
import BgImage from '../Assets/image.jpg'
import '../Styles/About.css'

function About() {
  return (
    <div className='intro'>
        <img src={BgImage} alt='' />
        <div className='intro-col'>
        <div className='intro-span'>
        <h1>I</h1>
        <span><h1>'</h1></span>
        <h1>M</h1>
      </div>
      <h1>ROBERT</h1>
      <div className='intro-span'>
        <h1>CARO</h1>
        <span><h1>.</h1></span>
      </div>
      <h5 id='h5-intro'>UX/UI DESIGNER & WEB</h5>
      <h5>DEVELOPER</h5>
      </div>
    </div>
  )
}

export default About