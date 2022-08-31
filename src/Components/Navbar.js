import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import '../Styles/Navbar.css'

function Navbar() {
    const OnClickHamburger = () => {
        const navIcon = document.querySelector('#nav-icon4');
        navIcon.classList.toggle('open');
        const navLinks = document.querySelector('.navLinks');
        navLinks.classList.toggle('hide');
      }
  return (
    <div className='nav'>
      <nav>
        <div className='brand-name'>
          <FaRegUser />
          <h6>Brand Name</h6>
        </div>
        <div id='nav-icon4' onClick={OnClickHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='navLinks hide' onClick={OnClickHamburger}>
          <ul><hr />
            <li><a href='App.js'>HOME</a></li><hr /><span>|</span>
            <li><a href='#professional'>PROFESSIONAL</a></li><hr /><span>|</span>
            <li><a href='#experience'>EXPERIENCE</a></li><hr /><span>|</span>
            <li><a href='#portfolio'>PORTFOLIO</a></li><hr /><span>|</span>
            <li><a href='#contact'>CONTACT</a></li><hr />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar