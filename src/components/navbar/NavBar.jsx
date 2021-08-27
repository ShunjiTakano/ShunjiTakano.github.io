import "./NavBar.scss"
import {Person, Mail} from '@material-ui/icons';
export default function NavBar({menuOpen,setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")} id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#introduction" className="home">Shunji.</a>
                    <div className="contactsContainer">
                        <Person className="icon"/>
                        <span>+64 21 239 3657</span>
                    </div>
                    <div className="contactsContainer">
                        <Mail className="icon"/>
                        <span>shunjit66@gmail.com</span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
