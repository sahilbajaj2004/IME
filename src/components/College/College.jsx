import React from 'react'
import './College.css'
import dark_arrow from '../../assets/dark-arrow.png'

const College = () => {
  return (
    <div className='college'>
      <div className="college-text">
        <h1>Institute of Management Education</h1>
        <p>Institute of Management Education is in the forefront of developing ever increasing intellects in interconnected and inter-cultural world. Known for its values and ethics based education,  IME’s commitment is to deliver excellence in education and developing the inherent talents of those who come here to study the courses.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default College