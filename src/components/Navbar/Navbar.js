import React,{useState} from 'react'
import './navbar.css'
import '../../Pages/Home/responsive.css'
import logo from '../../assets/blass.png';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
           <nav className="navbar">
                <img className="logo-img" src={logo} alt="brass" style={{width:60,height:40}} loading="lazy" />
                <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about-myself">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#accessories">Gadgets</a></li>
                  <Link to="/contact"> <li><a href="#accessories">Reach me</a></li></Link>
                </ul>
                <div className={showMenu === true ? "menu-toggle is-active" :"menu-toggle"} id="mobile-menu" onClick={()=>{setShowMenu(!showMenu)}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    {/* <span className="bar"></span> */}
                </div>
              </nav> 
        </>
    )
}
export default Navbar