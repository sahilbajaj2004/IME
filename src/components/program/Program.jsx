import React from 'react'
import './Program.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import pi1 from '../../assets/program-icon-1.png'
import pi2 from '../../assets/program-icon-2.png'
import pi3 from '../../assets/program-icon-3.png'


const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={p1} alt="" />
            <div className="caption">
                <img src={pi1} alt="" />
                <p>Computer Application</p>
            </div>
        </div>
        <div className="program">
            <img src={p2} alt="" />
            <div className="caption">
                <img src={pi2} alt="" />
                <p>Business Administration</p>
            </div>
        </div>
        <div className="program">
            <img src={p3} alt="" />
            <div className="caption">
                <img src={pi3} alt="" />
                <p>LAW</p>
            </div>
        </div>
    </div>
  )
}

export default Program