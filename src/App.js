import React, { useEffect, useState } from 'react'
// import logo from './assets/blass.png';
import './App.css';
import './AppResponsive.css';
import Loader from './components/Loader/Loader'
// import Carousel from './components/Carousel/Carousel'

function App() {
  // const [loading, setLoading] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  useEffect(()=>{
    // setLoading(true)
    // setTimeout(()=>{
    //   setLoading(false)
    // },2000)
  },[])
  return (
    <body>
      <div className="App">
           <section className="main-area">
              <nav className="navbar">
                <Loader/>
                <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#gadgets">Gadgets</a></li>
                </ul>
                <div className={showMenu ? "menu-toggle is-active" :"menu-toggle"} id="mobile-menu" onClick={()=>{setShowMenu(!showMenu)}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
              </nav>
              {/* <div className="socials">
                      <ul>
                        <li><a href="#social"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#social"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#social"><i class="fab fa-instagram"></i></a></li>
                      </ul>
              </div> */}
              <div className="intro-header">
                  <h1>I love what I do!</h1>
                  <p>Check out some of my lastest works</p>
              </div>
           </section>
           <section className="about-area" id="about">
                {/* <Carousel/> */}
           </section>
           <script src="toogleMenu.js"></script>
      </div>
    </body>
  );
}

export default App;
