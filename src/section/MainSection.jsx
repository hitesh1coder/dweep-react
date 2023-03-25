import React from "react";
import "./mainSection.css";

const mainSection = () => {
  return (
    <>
      <div className="main_container">
        <div className="left_container">
          <div className="detail_section">
            <h1>An inspiring design delivered to your inbox every morning</h1>
            <p className="description">
              Our team scouts the internet for the best designs, illustrations
              and art and delivers a truly inspiring one every day to your inbox
            </p>
            <h3>Show me how it looks</h3>

            <div className="register_section">
              <input type="text" placeholder="Your e-mail address" />
              <button className="register_btn">Register Now</button>
              <p className="detail_desc">Free - No Spam - No Data Sharing</p>
            </div>
          </div>
        </div>
        <div className="right_container">
          <img src="/images/Vector.png" alt="vector" />
        </div>
      </div>
    </>
  );
};

export default mainSection;
