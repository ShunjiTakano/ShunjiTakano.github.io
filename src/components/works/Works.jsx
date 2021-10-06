import "./Works.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src='assets/Coretex.png' alt=""/>
                                </div>
                                <h2>Coretex - Software Engineer</h2>
                                <h3>January 2021 - Present</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae, ipsam obcaecati ex temporibus reiciendis consequatur labore corrupti eius reprehenderit ad totam vitae possimus, necessitatibus enim provident neque consequuntur a?
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        </div>
                    </div>
                </div>
            </div>
            <ArrowBackIosIcon className="arrow left"/>
            <ArrowForwardIosIcon className="arrow right"/>
        </div>
    )
}
