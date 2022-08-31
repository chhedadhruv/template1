import React from 'react'
import '../Styles/Contact.css'
import BgImg from '../Assets/image.jpg'

function Contact() {
  return (
    <div className='cnt'>
        <img src={BgImg} alt='' />
    <div className='contact' id='contact'>
    <div className='contact-detail'>
      <h2>Contact</h2>
      <p>Looking forward to contact me?</p>
      <div className='contact-phone'>
        <h5>Phone</h5>
        <a href='#'>1800 1800 1800</a>
      </div>
      <div className='contact-email' id='margin'>
        <h5>Email</h5>
        <a href='#'>xyz@gmail.com</a>
      </div>
    </div>
    <div className='form'>
      <form>
        <div className='row'>
        <div className='form-name'>
          <p>First Name</p>
          <input type='text' name='firstName'></input>
        </div>
        <div className='form-name'>
          <p>Last Name</p>
          <input type='text' name='lastName'></input>
        </div>
        </div>
        <div className='row'>
        <div className='form-name'>
          <p>Email *</p>
          <input type='text' name='email'></input>
        </div>
        <div className='form-name'>
          <p>Subject</p>
          <input type='text' name='subject'></input>
        </div>
        </div>
        <div className='row'>
        <div className='form-name' id='submit-btn'>
          <p>Message</p>
          <input type='text' name='message'></input>
        </div>
        <div className='form-name'>
          <button>Submit</button>
        </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Contact