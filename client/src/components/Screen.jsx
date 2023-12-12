import React from 'react'

const Screen = ({getEquation, getVal}) => {
  return (
    <div className='screenContainer'>
        <div className='inputBar'>
          {getEquation}
        </div>
        <div className='outputBar'>
          {getVal}
        </div>
    </div>
  )
}

export default Screen