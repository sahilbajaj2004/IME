import React from 'react'
import './Campus.css'
import g1 from '../../assets/g1.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import g4 from '../../assets/g4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus