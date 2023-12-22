
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (

        <div>

            <div className="footer">
                <div className="boxes">
                    <div className="box box1">
                        <h2>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="box box2">
                        <h2>AROUND THE WEB</h2>
                      <div className="icons">
                        <span><RiFacebookCircleLine /></span>
                        <span><TiSocialTwitterCircular /> </span>
                        <span><FaInstagram /></span>
                        <span><FaWhatsapp /></span>
                      </div>
                    </div>
                    <div className="box box3">
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a>Start Bootstrap.</a></p>

                    </div>
                </div>
            </div>

                <div className="mini-footer">
                    <p>Copyright © Your Website 2023</p>
                </div>
        </div>
    )
}
export default Footer