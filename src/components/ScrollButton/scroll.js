import React, { useState, useEffect } from 'react'
import './scroll.css'
const  ScrollButton = (scroll) => {
   
    const [showScrollButton, setShowScrollButton] = useState(scroll ? false : true)

   
    const handleScroll = () => {
        if (window.pageXOffset > scroll) {
            if (!showScrollButton) setShowScrollButton(true)
        } else {
            if (showScrollButton) setShowScrollButton(false)
        }
    }
    const scrollToTop = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }
    useEffect(() => {
        if (scroll) { 
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })
    return (
        <>
            {showScrollButton &&
                <div className="bottom-scroll">
                    <div className="scroll-container">
                        <button onClick={scrollToTop}><i class="fas fa-long-arrow-alt-up"></i></button>
                    </div>
                </div>
             }
        </>
    )
}
export default ScrollButton
