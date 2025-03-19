import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="mailto:Piyush99.m@gmail.com">Piyush99.m@gmail.com</a></span>
        <span><a href="tel:+919080686063">+91-90806 86063</a></span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/piyush-m-23p10a1999/" target="_blank" ><LinkedIn size={"3rem"} color="white" /></a>
          <a href="https://github.com/Piyush10231999" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
