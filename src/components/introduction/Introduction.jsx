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
            strings: ["Software Engineer", "Coding Enthusiast", "Cloud Developer", "Food Lover"] 
        })
    },[]);

    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello,</h2>
                    <h1>I'm Shunji Takano</h1>
                    <h3>A <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon style={{fontSize:100}} className="arrow" />
                </a>
            </div>
        </div>
    )
}
