import React from 'react'
import Navbar from './components/Navbar/Navbar'
import College from './components/College/College'
import Program from './components/program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Reviews from './components/Review/Reviews'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Gallery from './pages/Gallery'


const App = () => {
  return (
    <div>
      <Navbar />
      <College />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Program />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Reviews' title='What Student Says' />
        <Reviews />
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact />
        <Footer />
        <Gallery/>
      </div>
    </div>
  )
}

export default App