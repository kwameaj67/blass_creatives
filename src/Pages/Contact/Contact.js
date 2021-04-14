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
             <div className="contact-header">  
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
                    <h1>Let's talk about you👋🏽</h1>
                    <div className="email-container">
                        <p>BlassCreatives is a talented professional photographer based in Accra-Ghana. I've spent years creating amazing photography for clients all over the country. Wanna chat or take project photoshoots or enquires. Just send an email request to book my services 📩</p>
                        <button onClick={sendEmail}>Emmanuelismael@blasscreatives.com</button>
                    </div>
            </div>
            <div className="form">
                <form className="contact-form-container" onSubmit={sendEmail} action="mailto:Emmanuelismael@blasscreatives.com " method="get" encType="text/plain">
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
                        <button className="submit-btn">Book me 🎉</button>
                    </div>
                </form>
            </div>
            {/* <div className="contact-details">
                 <p>Let's get in touch. It would make a day to hear from you. You can reach out by sending a simple email 👊🏽</p>
            </div>  */}
            <footer className="contact-footer">
                    <p>BlassCreatives &copy; {new Date().getFullYear()}</p>
           </footer>  
        </div>
    )
}
