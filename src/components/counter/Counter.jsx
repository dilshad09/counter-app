import React from 'react'
import './Counter.css'
import DisplayValue from '../display/DisplayValue'
const Counter = () => {
  return (
    <div className='container'>
        <p>Saving counter value</p>
      <div className='body-item'>
          <div className="item">-</div>
          <div className="item">10</div>
          <div className="item">+</div>
      </div>
      <DisplayValue/>
    </div>
  )
}

export default Counter
