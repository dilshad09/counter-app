import React from 'react'
import './Counter.css'
const Counter = () => {
  return (
    <div className='container'>
        <p>Saving counter value</p>
      <div className='body-item'>
          <div className="item">-</div>
          <div className="item">10</div>
          <div className="item">+</div>
      </div>
      <p>Counter Value</p>
    </div>
  )
}

export default Counter
