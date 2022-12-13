import React, {useState} from 'react'
import Navbar from './Navbar'
import Head from './Head'
import '../styles/Header.module.css'

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
        <div className="z-50">    
            <Head />
            <Navbar />
        </div>
    </>
  )
}

export default Header