import React from 'react'
import logo from "../../images/logo.png"
import "./index.css";


const index = () => {
  return (
		<div className="container-fluid">
			<nav className="container navbar navbar-expand-lg navbar-light bg-white">
				<img src={logo} alt="logo"/>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
        </button>

				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item nav-text active mr-5 mt-3">
							<a href="#">
								FAQ
							</a>
						</li>
						<li className="nav-item nav-text mr-5 mt-3">
							<a  href="#">
								DEVELOPERS
							</a>
						</li>
						<li className="nav-item nav-text mt-3">
              <button className="getStartedBtn">
                GET STARTED
            </button>
						</li>
					</ul>

				</div>
			</nav>
		</div>
	);
}

export default index

