import "./Introduction.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Introduction() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1000,
            backSpeed: 70,
            strings: ["Translator", "Pottery Enthusiast", "Foodie"] 
        })
    },[]);

    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.png" alt="yes" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey There!</h2>
                    <h1>I'm Fadhilla Hasan</h1>
                    <h3>A <span ref={textRef}></span></h3>
                </div>
                <a href="#works">
                    <KeyboardArrowDownIcon style={{fontSize:100}} className="arrow" />
                </a>
            </div>
        </div>
    )
}
