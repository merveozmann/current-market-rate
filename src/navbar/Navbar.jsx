import "./navbar.css"
import {IoMdNotificationsOutline,IoMdSettings} from "react-icons/io"
import LOGO from "../logo.png"
const navbar = () => {
    return (
        <div className="navbar__container">
            <div className="navbar__item">
                <div className="left__item">
                    <h5>CURRENT RATE</h5>
                </div>
                {/* <div className="right__item">
                    <span className="navbarIconContainer">
                        <IoMdSettings />
                        <span className="navbarIconContainer-count">2</span>
                    </span>
                    <span className="navbarIconContainer">
                        <IoMdNotificationsOutline />
                        <span className="navbarIconContainer-count">2</span>
                    </span>
                    <div className="navbarUserContainer">
                        <img className="navbarUserContainer-image" src={LOGO} alt="" />
                        <span className="navbarUserContainer-name">Merve YILMAZ</span>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default navbar