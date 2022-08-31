import React from 'react'
import '../Styles/Progress.css'
import Bg2 from '../Assets/image1.jpeg'

function Progress() {
  return (
    <div className='progress'>
        <img src={Bg2} alt='' />
    <div className='professional' id='professional'>
        {/* <img src={Bg2} alt=''/> */}
      <div className='pro-heading'>
        <h3>01 PROFESSIONAL</h3>
        <h5>MY KNOWLEDGE LEVEL IN SOFTWARE</h5>
      </div>
      <div className='progress-bars'>
        <div className='progress-bar'>
        <p>WORDPRESS</p>
        <div className='bar' id='bar1'></div>
        <p>75%</p>
        </div>
        <div className='progress-bar'>
        <p>DRUPAL</p>
        <div className='bar' id='bar2'></div>
        <p>70%</p>
        </div>
        <div className='progress-bar'>
        <p>JAVASCRIPT</p>
        <div className='bar' id='bar3'></div>
        <p>85%</p>
        </div>
        <div className='progress-bar'>
        <p>WIX</p>
        <div className='bar' id='bar4'></div>
        <p>95%</p>
        </div>
        <div className='progress-bar'>
        <p>PHOTOSHOP</p>
        <div className='bar' id='bar5'></div>
        <p>85%</p>
        </div>
        <div className='progress-bar'>
        <p>ILLUSTATOR</p>
        <div className='bar' id='bar6'></div>
        <p>80%</p>
        </div>
        <div className='progress-bar'>
        <p>HTML & CSS</p>
        <div className='bar' id='bar7'></div>
        <p>80%</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Progress