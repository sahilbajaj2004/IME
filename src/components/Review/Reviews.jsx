import React, { useRef } from 'react'
import './Review.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import r1 from '../../assets/r1.jpg'
import r2 from '../../assets/r2.jpg'
import r3 from '../../assets/r3.jpg'
import r4 from '../../assets/r4.jpg'


const Reviews = () => {
    const slider = useRef();
    const tx = useRef(0); // Persist the tx value

    const slideForward = () => {
        if (tx.current > -50) {
            tx.current -= 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    };

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    };


    return (
        <div className='review'>
            <img src={next} alt="" className='next-btn' onClick={slideForward} />
            <img src={back} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider} >
                    <li>
                        <div className="slide">
                            <div className="review-info">
                                <img src={r1} alt="" />
                                <div>
                                    <h3>Rajeev sharma</h3>
                                    <span>Sr.Executive - INDIA TV</span>
                                </div>
                            </div>
                            <p>I would like to say that the three years at IME were one of the best periods of my life. At IME, it always felt like a family, and another home, which helped me in my academic education. I am thankful to all the staff members of the College for their continuous efforts and assistance. I cherish every moment spent at IME.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="review-info">
                                <img src={r2} alt="" />
                                <div>
                                    <h3>Amrish Kumar</h3>
                                    <span>Director - Delhi Development Authority</span>
                                </div>
                            </div>
                            <p>I am thankful to all the faculty members and management of the IME College for their continuous efforts and support. Apart from a good academic experience, I cherish moments of extra- curricular and fun time spent with my batch-mates. My law journey at IME Law college has been quiet interesting and awesome. </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="review-info">
                                <img src={r3} alt="" />
                                <div>
                                    <h3>Jitender Kumar</h3>
                                    <span>Vice President - INDIA TV</span>
                                </div>
                            </div>
                            <p>I’m writing to thank you for the generous contribution you have made to my educational and academic pursuit. The college experience, I will be most thankful for the opportunity to better myself through education, forming relationships, and experience with the real world and how people relate with one another.</p>
                            <p>Thank you IME family once again……</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="review-info">
                                <img src={r4} alt="" />
                                <div>
                                    <h3>Shivesh Singh</h3>
                                    <span>Income Tax Officer</span>
                                </div>
                            </div>
                            <p>I feel very honored to be a part of our institute. I have done graduation from IME and I still feel that it was a great decision of mine. It has been so many years, I still remember those lectures and bunks too. I can say that it was a great learning experience as graduation is not only about completing a degree course it is an overall experience of lifetime.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Reviews