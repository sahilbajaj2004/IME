import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About Our Campus</h3>
            <h2>“IME Is A Workshop. Not A Showroom”</h2>
            <p>Fired by missionary zeal and patriotism to serve the society and our great country. A group of social activists and educationists laid foundation of IME in 1995 to promote professional education.</p>
            <p>The purpose of the IME is to train and equip younger generation of the society so that they can excel in the field of management, law, Info-technology. etc. and play a dominant role in the nation building. IME is accredited by National Assessment and Accreditation Council (NAAC). It is also certified ‘B’ school by International Accreditation Organization USA.</p>
            <p>IME was started in 1995 by a group of leading academicians and corporate executives in NCR. Over the past 25 years it got established itself as one of the premier Business Schools of the country. With the mission to serve the society by promoting excellence in education, the institute has diversified in the areas of Management, Commerce, Information Technology and Law.</p>
        </div>
    </div>
  )
}

export default About