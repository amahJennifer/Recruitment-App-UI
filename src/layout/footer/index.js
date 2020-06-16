import React from 'react'
import logo from "../../images/logo.png"
import "./index.css"
const index = () => {
  return (
    <footer>
      <div className="content footer">
        <div className="footerHeader">
          <div className="logoContainer">
            <div className="footerLogo"> <img src={logo} alt="logo" /></div>

				   <p>Platform for the top</p>
          <p>3% engineering talent</p>
             <span> copyright 2020 . A Decagon Company.</span>
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
            <li><p>Developers</p></li>
            <li>Benefits</li>
            <li>Apply</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div >
          <ul className="footerItem">
            <li><p>Twitter</p></li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

		</div>
    </footer>

	);
}

export default index
