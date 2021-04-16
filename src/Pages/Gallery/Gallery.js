import React, { useEffect,useRef } from 'react'
import './gallery.css'
import logo from '../../assets/blass.png';
import { Link } from 'react-router-dom';
import gall1 from '../../assets/755bc551-4b94-4b27-a4bd-7295625995cb 2.jpg'
import gall2 from '../../assets/ayo-ogunseinde-1L5QpkSs5IU-unsplash.jpg'
import gall3 from '../../assets/jd-mason-qvqMQf9mg04-unsplash.jpg'
import gall4 from '../../assets/macclusky-gbekle-j2xe3HO8lDE-unsplash.jpg'
import gall5 from '../../assets/eye-for-ebony-OExQjtxbIpE-unsplash.jpg'
import gall6 from '../../assets/engin-akyurt-Np8r_VcKZzw-unsplash.jpg'
import gall7 from '../../assets/oladimeji-odunsi-wecunh3nBrA-unsplash.jpg'
import gall8 from '../../assets/alex-sorto--fowxtAtWW8-unsplash.jpg'
import gall9 from '../../assets/quaid-lagan-92YQRw3-__I-unsplash.jpg'
import { TweenMax,TimelineLite,Power3} from 'gsap'

const Gallery = () => {
    let app = useRef(null)
    let imagesSection1 = useRef(null)
    // let imagesSection2 = useRef(null)
    // let imagesSection3 = useRef(null)
    // let imagesSection4 = useRef(null)
    let tl = new TimelineLite()

    const animation = ()=> {
        // IMAGES VAR
        const gall2 = imagesSection1.firstElementChild
        const gall3 = imagesSection1.lastElementChild

        TweenMax.to(app,0,{css:{visibility:'visible'}})

        tl.from(gall2, 1.2 , {y:1280, ease:Power3.easeOut})
        .from(gall2.firstElementChild, 2, { scale:1.6, ease:Power3.easeInOut}, .2)
        .from(gall3, 1.2 , {y:1280, ease:Power3.easeOut}, .2)
        .from(gall3.firstElementChild, 2, { scale:1.6, ease:Power3.easeInOut}, .2)
        
        console.log(gall2,gall3)
    }
    useEffect(() => {
        document.title = "Gallery - BlassCreatives"
        // console.log(app)
        // console.log(imagesSection1)
        animation()
    })
   
    return (
        <div className="gallery-page" ref={el => app = el}>
            <div className="gallery-header">  
                <div className="gallery-nav">
                    <Link to="/">
                        <img className="logo-img" src={logo} alt="brass" style={{ width: 60, height: 40 }} loading="lazy" />
                    </Link>
                    <div className="go-back">
                        <Link to="/">
                            <button>Go back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="gallery-image-container" >
                <div className="gallery-img" ref={el => imagesSection1 = el} >
                   <img src={gall2} alt="gall2" className="gall2" loading="lazy" /> 
                   <img src={gall3} alt="gall3" className="gall3"  loading="lazy"/> 
                </div>
                <div className="gallery-img " >
                   <img src={gall5} alt="gall5" className="gall5" loading="lazy"/> 
                   <img src={gall9} alt="gall9" className="gall9" loading="lazy"/> 
                </div>
                <div className="gallery-img " >
                   <img src={gall8} alt="gall8" className="gall8" loading="lazy"/> 
                   <img src={gall7} alt="gall7" className="gall7" loading="lazy"/> 
                </div>
                <div className="gallery-img " >
                   <img src={gall6} alt="gall6" className="gall6" loading="lazy"/> 
                </div>
                <div className="gallery-img " >
                    <img src={gall1} alt="gall1" className="gall1" loading="lazy" /> 
                   <img src={gall4} alt="gall4" className="gall4" loading="lazy"/> 
                </div>
            </div>
            <footer className="gallery-footer">
                       <div className="gallery-socials">
                          <ul>
                            <li><a href="https://web.facebook.com/Blass-Creatives-109164497905839/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#social"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/blasscreatives_/"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                     </div>
                    <p>BlassCreatives &copy; {new Date().getFullYear()}. Made by <span><a className="design" href="https://twitter.com/___papakwame">papakwame</a></span></p>
           </footer>  
        </div>
    )
}

export default Gallery