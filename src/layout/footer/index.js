import React from 'react'
import logo from "../../images/logo.png"
import "./index.css"
const index = () => {
  return (
		<div className="footer">
      <div className="logoContainer">
         <img src={logo} alt="logo" />
        <div className="text">
				<p>Platform for the top</p>
          <p>3% engineering talent</p>
 <span> copyright 2020 . A Decagon Company.</span>
        </div>

      </div>
      <div className="footerHeader">
        <div >
          <ul className="footerItem">
            <li><p>Company</p></li>
            <li>Benefits</li>
            <li>Get Started</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div >
          <ul className="footerItem">
            <li><p>Company</p></li>
            <li>Benefits</li>
            <li>Get Started</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div >
          <ul className="footerItem">
            <li><p>Company</p></li>
            <li>Benefits</li>
            <li>Get Started</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

		</div>
	);
}

export default index
