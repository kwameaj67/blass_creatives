import React,{useEffect,useState} from 'react'
import './contact.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/blass.png';

export default function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    useEffect(() => {
        document.title = "Reach me - BlassCreatives"
    }, )

    const sendEmail = (e) => {
        e.preventDefault()
    }
    return (
        <div className="contact-page">
             <div className="contact-header animate__animated animate__fadeInDown animate__delay-1s">  
                <div className="contact-nav">
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
            <div className="contact-heading">
                    <h1 className="animate__animated animate__fadeInDown animate__delay-2s">Let's talk about youðð½</h1>
                    <div className="email-container">
                        <p className="animate__animated animate__fadeInDown animate__delay-3s">BlassCreatives is a talented professional photographer based in Accra-Ghana. I've spent years creating amazing photography for clients all over the country. Wanna chat or take project photoshoots or enquires. Just send an email request to book my services ð©</p>
                        <button onClick={sendEmail} className="animate__animated animate__fadeInDown animate__delay-4s">Emmanuelismael@blasscreatives.com</button>
                    </div>
            </div>
            <div className="form ">
                <form className="contact-form-container animate__animated animate__fadeInUp animate__delay-4s" onSubmit={sendEmail} action="mailto:Emmanuelismael@blasscreatives.com " method="get" encType="text/plain">
                    {/* <h1>Get in touch with me</h1> */}
                    <div className="form-item">
                        <label className="input-label">Your fullname</label>
                        <input placeholder="Enter fullname" className="text-input" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className="form-item">
                        <label className="input-label">Your email</label>
                        <input placeholder="Enter email address" className="text-input" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="form-item">
                        <label className="input-label" value={message} onChange={(e) => {setMessage(e.target.value)}}>Your message(Optional)</label>
                        <input placeholder="Enter message" className="text-input message-field"/>
                    </div>
                    <div className="form-item">
                        <button className="submit-btn">Book me ð</button>
                    </div>
                </form>
            </div>
            {/* <div className="contact-details">
                 <p>Let's get in touch. It would make a day to hear from you. You can reach out by sending a simple email ðð½</p>
            </div>  */}
            <footer className="contact-footer">
                    <p>BlassCreatives &copy; {new Date().getFullYear()}</p>
           </footer>  
        </div>
    )
}
