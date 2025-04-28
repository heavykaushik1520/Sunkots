import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import MenuList from './components/menu/MenuList'
import About from './components/about/About'
import Testimonial from './components/testimonial/Testimonial'
import Infrastructure from './components/infrastructure/Infrastructure'
import EatItToBelieveItSection from './components/banner/EatItToBelieveItSection'

function App() {
  return (
    <div>
      <Navbar/>
       <Banner/>
       
      
      {/* <Menu/> */}
      {/* <About/>
      <Testimonial/>
      <Infrastructure/> */}
      <Footer/>
     
    </div>
  )
}

export default App
