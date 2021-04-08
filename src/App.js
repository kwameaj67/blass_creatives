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
import access1 from './assets/conor-luddy-IVaKksEZmZA-unsplash (1).jpg'
import access2 from './assets/top-view-photography-accesories-with-copy-space.jpg'
import access3 from './assets/oliver-pecker-HONJP8DyiSM-unsplash.jpg'
import caro1 from './assets/engin-akyurt-Np8r_VcKZzw-unsplash.jpg'
import caro2 from './assets/diana-simumpande-xZgkFQ4Hijc-unsplash.jpg'
import caro3 from './assets/macclusky-gbekle-j2xe3HO8lDE-unsplash.jpg'
import caro4 from './assets/engin-akyurt-mTdOAVYBHEs-unsplash.jpg'
import './App.css';
import './AppResponsive.css';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Gallery from './Pages/Gallery/Gallery'
import Carousel from 'react-bootstrap/Carousel'
function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Router>
        <Switch>
          <Route exact path="/" />
          <Route path="/gallery" component={Gallery}/>
           
          
        </Switch>
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
                <div className={showMenu === true ? "menu-toggle is-active" :"menu-toggle"} id="mobile-menu" onClick={()=>{setShowMenu(!showMenu)}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
              </nav>
              <div className="intro-header">
                  <h1>A photographer based in Ghana, looking forward to helping you bring your ideas into stunning photography effortlessly</h1>
                  <p>BlassCreatives is an intelligent professional photographer based in Ghana. Check out some of my lastest works below</p>
              </div>
           </section>
           <section className="about-area" id="about">
               <div className=" carousel">
                <Carousel activeIndex={index} onSelect={handleSelect}
                nextIcon={<span><i className="fas fa-chevron-right"></i></span>}
                prevIcon={<span><i className="fas fa-chevron-left"></i></span>}
                >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={caro1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={caro2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={caro3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={caro4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
               </div>
               <div className="grid-container">
                      <div className="grid-50  mobile-grid-100  about-imgs">
                          <img src={group} alt="group2" className="group-color" loading="lazy" />
                          <img src={HUGHES2} alt="group2" className="HUGHES2" loading="lazy"/>
                          <img src={group} alt="group2" className="group-color2" loading="lazy" />
                      </div>
                      {/* <div className="grid-10 separator"></div> */}
                      <div className="grid-50 mobile-grid-100 text">
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
                      <div className="gallery-items">
                          <div className="image1"  >
                             {/* <img src={gallery1} alt="galleryImage" className="gallery-img" />  */}
                          </div>
                          <div className="image2"  >
                             {/* <img src={gallery2} alt="galleryImage" className="gallery-img" />  */}
                          </div>
                          <div className="image3">
                             {/* <img src={gallery3} alt="galleryImage" className="gallery-img" />  */}
                          </div>
                      </div>
                      <div className="gallery-items">
                          <div className="image4"></div>
                          <div className="image5"  ></div>
                          <div className="image6"></div>
                             {/* <img src={gallery4} alt="galleryImage" className="gallery-img" />  */}
                             {/* <img src={gallery5} alt="galleryImage" className="gallery-img" />  */}
                             {/* <img src={gallery6} alt="galleryImage" className="gallery-img" />  */}
                      </div>
                </div>
                <div className="view-btn">
                    <Link to="/gallery">
                        <button>View all</button>
                    </Link>
                </div>  
           </section>
           {/* accessories */}
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
                                  <div className="grid-50 mobile-grid-100 mobile-push-100">
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
                                  <div className="grid-50  mobile-grid-100 mobile-pull-100">
                                      <img src={access2} alt="accessories" className="access-img" loading="lazy"/>
                                  </div>
                              </div>
                            </div>
                            <div className="accessories-item">
                              <div className="grid-container">
                                  <div className="grid-50  mobile-grid-100 ">
                                      <img src={access3} alt="accessories" className="access-img" loading="lazy"/>
                                  </div>
                                  <div className="grid-50 mobile-grid-100">
                                      <div className="details">
                                            <h4>Computers / Mobile devices</h4>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>MACBOOK PRO(2019)</p>
                                            </div>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>iPAD PRO 12.5inch</p>
                                            </div>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>iMAC 27 inch</p>
                                            </div>
                                            <div className="other-details">
                                                <i className="fas fa-caret-right"></i>
                                                <p>iPhone 12 PRO MAX</p>
                                            </div>
                                      </div>
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
                    <p>BlassCreatives &copy; {new Date().getFullYear()}. Designed by <span><a className="design" href="https://twitter.com/___papakwame">papakwame</a></span></p>
           </footer>
         </div>
    </Router>
  );
}

export default App;
