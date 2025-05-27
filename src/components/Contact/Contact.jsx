import React from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'
import address from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Message <img src={message} alt="" /></h3>
            <p>IME has its own campus spread over 7 acres of land located strategically at Main G.T. Road, Sahibabad, GZB.</p>
            <ul>
                <li><img src={phone} alt="" />+91-9599706361/62/63/64/65</li>
                <li><img src={mail} alt="" />ime@ime.in</li>
                <li><img src={address} alt="" />178,Main G.T. Road, Sahibabad, Between Mohan Nagar & Dilshad Garden Metro Station, Ghaziabad, U.P. – 201005</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name ' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your mobile number ' required />
                <label>Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={whitearrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact