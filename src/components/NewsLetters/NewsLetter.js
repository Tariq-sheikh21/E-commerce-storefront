import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
       <h1>Gets Exclusive Offers on Your Email</h1>
       <p>Subscribe To Our Newsletter and Stay Updated</p>
       <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
       </div>
   
    </div>
  )
}

export default NewsLetter