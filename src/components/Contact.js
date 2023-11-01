import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/style.css";

function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="sm-header">
        Reach us on any of our social media platforms
      </h1>
      <a href="https://t.me/oluklef17" id="telegram" target="_blank">
        <FontAwesomeIcon icon={faTelegram} className="sm-icon" />
      </a>
      <a href="https://wa.me/+2348072708424" id="whatsapp" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} className="sm-icon" />
      </a>
      <a href="https://twitter.com/jarvistrade_ai" id="twitter" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="sm-icon" />
      </a>
      <a
        href="https://www.youtube.com/@jarvistrade6558"
        id="youtube"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} className="sm-icon" />
      </a>
    </>
  );
}

export default Contact;
