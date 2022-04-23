import React, { useState } from 'react'
import './Counter.css'
import DisplayValue from '../display/DisplayValue'
import loadingImg from '../../images/loading-buffering.gif'

const initialValue = ()=>{
  fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json').then((res)=>res.json()).then((response=>{
    return response
  }))
}
const Counter = () => {
  const [value, setValue] = useState(()=>initialValue() || 1)
  console.log(value)
  return (
    <div className='container'>
        <img src={loadingImg } alt="loading" title='loading...' style={{width:"20px"}}/> <span style={{fontSize:"12px"}}>Saving counter value</span>
      <div className='body-item'>
          <div className="item" onClick={()=>setValue((pre)=>pre-1)}>-</div>
          <div className="item">{value}</div>
          <div className="item" onClick={()=>setValue((next)=>next+1)}>+</div>
      </div>
      <DisplayValue value={value}/>
    </div>
  )
}

export default Counter
