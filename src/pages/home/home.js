import React from 'react'
import man from "../../images/man.png";
import kobo from "../../images/kobo.png"
import interswitch from "../../images/Interswitch.png"
import union from "../../images/union.png"
import seamfix from "../../images/seamfix.png"

import "./index.css";
const home = () => {
  return (
		<div>
			<div className="firstSection content">
				<div className="text">
					<div className="bigText">
						<h1>
							Hire the Best <br /> Software Talents
						</h1>
					</div>

					<p>
						Best believe that the shortlisted
						<br /> software talents on this platform
						<br />
						are the top 3% in the country
					</p>
					<button className="getStartedBtn"> GET STARTED </button>
				</div>
				<div className="manImage">
					<img src={man} alt="man" />
				</div>
			</div>

			<div className="partners content">
				<div className="company">
					<p>These Companies Trust us</p>
				</div>

				<div className="partnerImage">
					<img src={kobo} />
				</div>
				<div className="partnerImage">
					<img src={seamfix} />
				</div>
				<div className="partnerImage">
					<img src={interswitch} />
				</div>
				<div className="partnerImage">
					<img src={union} />
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default home





