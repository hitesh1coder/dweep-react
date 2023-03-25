import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_left">
          <ul>
            <li>Prompt Generator</li>
            <li>Dweep Daily</li>
            <li>All Contributors</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to Dweep</li>
          </ul>
        </div>
        <div className="footer_right">
          <ul>
            <li> Dweep.io</li>
            <li>Made with love in India</li>
          </ul>
          <div className="icons">
            <img src="/images/icons8-linkedin-50.png" alt="linedIn" />
            <img src="/images/icons8-instagram-50.png" alt="linedIn" />
          </div>
          <p>hello@dweep.io</p>
        </div>
      </div>
      ;
    </>
  );
};

export default footer;
