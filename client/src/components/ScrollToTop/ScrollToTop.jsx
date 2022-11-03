import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

import './scrollToTop.scss';

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {showScrollTopButton && (                
                <MdKeyboardArrowUp
                    className="scroll-up"                    
                    onClick={scrollTop}
                />
            )}
        </>
    )
}

export default ScrollToTop;
