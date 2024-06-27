import React from 'react'
import './background.scss'

const BackgroundContainer = () => {
  return (
    <section>
      <img src={'/public/asset/images/bgimage.png'} alt="back" />
      <div className='sun'>SUNOLLO<sup>TM</sup></div>
      <div className='sun2'>Sun For All</div>
      <div className='sun3'>
      Save up to <strong>80%</strong> on electricity bills 
      while <br />also saving our planet.
      </div>
      <div className='button'>
        <button className='button1'>Get Started  </button>
        <button className='button2'> Calculate My Savings</button>
      </div>
      <div className='sun4'>
        <span>
          <p className='dollar'>$0</p>
          <p>Start with $0 Upfront.
               No hidden fees.
          </p>
        </span>
        <span>
          <p>Slash your monthly electricity expenses.</p>
        </span>
      </div>
    </section>
  )
}

export default BackgroundContainer