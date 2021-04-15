import React,{useState} from 'react'
import './navbar.css'
import '../../Pages/Home/responsive.css'
import logo from '../../assets/blass.png';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
    return (
        <>
           <nav className="navbar animate__animated animate__fadeInDown animate__delay-1s" >
                <img className="logo-img" src={logo} alt="brass" style={{width:60,height:40}} loading="lazy" />
                <ul className={showMenu === true ? "nav-menu active" : "nav-menu"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about-myself">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#accessories">Gadgets</a></li>
                  {/* <li><a href="#accessories"><Link to="/contact"> Reach me</Link></a></li> */}
                  <Link to="/contact"><li><span>Reach me</span></li></Link>
                </ul>
                <div className={showMenu === true ? "menu-toggle is-active" : "menu-toggle" } id="mobile-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    {/* <span className="bar"></span> */}
                </div>
              </nav> 
        </>
    )
}
export default Navbar