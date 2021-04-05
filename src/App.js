import React, {useState } from 'react'
import logo from './assets/blass.png';
import group from './assets/Group2.svg'
import HUGHES2 from './assets/HUGHES2.jpg'
// import gallery1 from './assets/755bc551-4b94-4b27-a4bd-7295625995cb 2.jpg'
// import gallery2 from './assets/ayo-ogunseinde-1L5QpkSs5IU-unsplash.jpg'
// import gallery3 from './assets/jd-mason-qvqMQf9mg04-unsplash.jpg'
// import gallery4 from './assets/HUGHES2.jpg'
// import gallery5 from './assets/quaid-lagan-92YQRw3-__I-unsplash.jpg'
// import gallery6 from './assets/oladimeji-odunsi-wecunh3nBrA-unsplash.jpg'
import access1 from './assets/alexander-london-9g-IuCd8iaQ-unsplash.jpg'
import './App.css';
import './AppResponsive.css';
// import Loader from './components/Loader/Loader'

function App() {
  const [showMenu, setShowMenu] = useState(false)
 
  return (
    <div className="App">
           <section className="main-area">
              <nav className="navbar">
                {/* <Loader/> */}
                <img className="logo-img" src={logo} alt="brass" style={{width:80,height:60}} loading="lazy" />
                <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#accessories">Gadgets</a></li>
                </ul>
                <div className={showMenu ? "menu-toggle is-active" :"menu-toggle"} id="mobile-menu" onClick={()=>{setShowMenu(!showMenu)}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
              </nav>
              <div className="intro-header">
                  <h1>I love what I do!</h1>
                  <p>Check out some of my lastest works</p>
              </div>
           </section>
           <section className="about-area" id="about">
               <div className="grid-container">
                      <div className="grid-50  mobile-grid-100 about-imgs">
                          <img src={group} alt="group2" className="group-color" loading="lazy" />
                          <img src={HUGHES2} alt="group2" className="HUGHES2" loading="lazy"/>
                          <img src={group} alt="group2" className="group-color2" loading="lazy" />
                      </div>
                      <div className="grid-10 separator"></div>
                      <div className="grid-40 mobile-grid-100 text">
                        <h1>About me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                </div>
           </section>
           <section className="gallery-area" id="gallery">
                <div className="background-header">
                    <h1>Gallery</h1>
                </div>
                <div className="my-gallery">
                      <div className="grid-container gallery-items">
                          <div className="grid-33 image1"  >
                             {/* <img src={gallery1} alt="galleryImage" className="gallery-img" />  */}
                          </div>
                          <div className="grid-33 image2"  >
                             {/* <img src={gallery2} alt="galleryImage" className="gallery-img" />  */}
                          </div>
                          <div className="grid-33 image3">
                             {/* <img src={gallery3} alt="galleryImage" className="gallery-img" />  */}
                          </div>
                      </div>
                      {/* <div className="grid-container">
                          <div className="grid-33 image4"  >
                             <img src={gallery4} alt="galleryImage" className="gallery-img" /> 
                          </div>
                          <div className="grid-33 image5"  >
                             <img src={gallery5} alt="galleryImage" className="gallery-img" /> 
                          </div>
                          <div className="grid-33 image6">
                             <img src={gallery6} alt="galleryImage" className="gallery-img" /> 
                          </div>
                      </div> */}
                </div>
                <div className="view-btn">
                    <button>View all</button>
                </div>  
           </section>
           <section className="accessories-area" id="accessories">
                  <div className="background-header">
                        <h1>What's in my bag?</h1>
                        <p>View all gears I presently use for images here.</p>
                    </div>
                  <div className="accessories-item-container">
                          <h1>Accessories</h1>
                          <div className="accessories-item">
                            <div className="grid-container">
                                <div className="grid-50  mobile-grid-100 ">
                                    <img src={access1} alt="accessories" className="access-img" loading="lazy"/>
                                </div>
                                <div className="grid-50 mobile-grid-100">
                                    <div className="details">
                                          <h4>Camera</h4>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Canon EOS R</p>
                                          </div>
                                    </div>
                                    <div className="details">
                                          <h4>Lenses</h4>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Canon RE 85mm f/1.2l USM Lens</p>
                                          </div>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Canon RE 15-35mm f/1.8l 15 USM Lens</p>
                                          </div>
                                    </div>
                                    <div className="details">
                                          <h4>Filters</h4>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Polar PRO Mckinnon Edition 82mm</p>
                                          </div>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Variable MO 2.5 Filter</p>
                                          </div>
                                    </div>
                                    <div className="details">
                                          <h4>Lights</h4>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Profoto B10 Air Ttl</p>
                                          </div>
                                          <div className="other-details">
                                             <i className="fas fa-caret-right"></i>
                                             <p>Aputure LS C300d II</p>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accessories-item">
                              <div className="grid-container">
                                  <div className="grid-50 mobile-grid-100">
                                      <div className="details">
                                            <h4>Storage</h4>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>Gnarbox 2.0(512SSD)</p>
                                            </div>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>Sanddisk Extreme Pro</p>
                                            </div>
                                      </div>
                                      <div className="details">
                                            <h4>Audio</h4>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>Rode Wireless GO</p>
                                            </div>
                                      </div>
                                      <div className="details">
                                            <h4>GIMBAL</h4>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>DJI RS 2</p>
                                            </div>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>DJI Ronin S</p>
                                            </div>
                                      </div>
                                      <div className="details">
                                            <h4>Tripod</h4>
                                            <div className="other-details">
                                              <i className="fas fa-caret-right"></i>
                                              <p>Profoto B10 Air Ttl</p>
                                            </div>
                                            <div className="other-details">
                                              <i className="fas fa-caret-right"></i>
                                              <p>Manfrotto MVMXPRO500US XPRO</p>
                                            </div>
                                            <div className="other-details">
                                              <i className="fas fa-caret-right"></i>
                                              <p>Neewer PRO 100</p>
                                            </div>
                                            <div className="other-details">
                                              <i className="fas fa-caret-right"></i>
                                              <p>Joby Gorilla Pod 5k</p>
                                            </div>
                                      </div>
                                  </div>
                                  <div className="grid-50  mobile-grid-100 ">
                                      <img src={access1} alt="accessories" className="access-img" loading="lazy"/>
                                  </div>
                              </div>
                            </div>
                        </div>
                  </div>

           </section>
           <footer className="footer-area">
                       <div className="socials">
                          <ul>
                            <li><a href="#social"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#social"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#social"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                     </div>
                    <p>blasscreatives_</p>
           </footer>
    </div>
  );
}

export default App;
