import './App.css'
import './css/Navbar.css'
import './css/Navbar_Sub.css'
import './css/Navbar_Filter.css'
import './css/Delivery.css'
import './css/Dining.css'
import './css/Footer.css'

import Navbar from './components/Navbar/Navbar'
import Navbar_filter from './components/Navbar/Navbar_filter'
import Navbar_sub from './components/Navbar/Navbar_sub'
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Dining from './components/Dining'
import { Route, Routes, } from 'react-router-dom'
import NightLife from './components/NightLife'

function App() {
  return (
    <>
    <Navbar/>
    <Navbar_sub/>
    <Navbar_filter/>
    <Routes>
      <Route path='/' element={<Delivery/>}/>
      <Route path='/dining' element={<Dining/>}/>
      <Route path='/nightlife' element={<NightLife/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
