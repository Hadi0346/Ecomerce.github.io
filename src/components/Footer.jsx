import React from "react";

function Footer() {
  return (
    <div className="subscribe-container">
      <h3>subscribe to My Channel For React Projects</h3>

      <div className="subscribe-input">
        <input placeholder="hadirehman69@gmail.com" type="email" />
        <a className="subscribe-btn" href="#">
          Send
        </a>
      </div>
    </div>
  );
}

export default Footer;
