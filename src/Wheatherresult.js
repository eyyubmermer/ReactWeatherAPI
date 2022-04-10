import React from 'react'
import App from './App'
import './wheatherresult.css'

function Wheatherresult({date,mintemp,maxtemp,condition,icon}) {
  return (
    <div className="result">
        <h2>{date}</h2>
        <ul>
            <li><img src={icon} alt="" /></li>
            <li className='condition'>{condition}</li>
            <li className='degree'>{mintemp} C/ {maxtemp} C</li>
        </ul>
    </div>
  )
}

export default Wheatherresult