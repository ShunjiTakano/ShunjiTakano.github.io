import "./NavBar.scss"
import {Mail} from '@material-ui/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function NavBar({menuOpen,setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")} id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#introduction" className="home">Fadhilla.</a>
                    <div className="contactsContainer">
                        <Mail className="icon"/>
                        <span>fadhillahasan@gmail.com</span>
                    </div>
                    <div className="contactsContainer">
                        <LinkedInIcon className="icon"/>
                        <span>
                            <a href="https://www.linkedin.com/in/shunji-takano">linkedin.com/in/fadhilla-hasan</a>
                        </span>
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
