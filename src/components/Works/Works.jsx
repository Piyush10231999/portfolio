import React, { useContext } from "react";
import "./Works.css";
import L1 from "../../img/L1.png";
import L2 from "../../img/L2.png";
import L3 from '../../img/L3.png'
import L4 from "../../img/L4.png";
import L5 from "../../img/L5.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Company</span>
          <spane>
          I have had the privilege of working with highly reputed companies,
            <br />
            recognized for their excellence and innovation in the industry.
            <br />
            These experiences have shaped my skills and fueled my passion for delivering top-tier solutions.
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={L1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={L2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={L3} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={L4} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={L5} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
