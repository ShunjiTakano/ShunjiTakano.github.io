import "./Works.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { workdata } from "../../data";

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                {workdata.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <h3>{d.date}</h3>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img}/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowBackIosIcon className="arrow left"/>
            <ArrowForwardIosIcon className="arrow right"/>
        </div>
    )
}
