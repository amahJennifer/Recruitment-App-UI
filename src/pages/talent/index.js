import React from 'react'
import arrow from "../../images/arrow.png";
import talent1 from "../../images/talent1.png";
import talent2 from "../../images/talent2.png";



import "./index.css"
const index = () => {
  return (
		<div className=" content talentContainer">
			<div className="shortlist">
				<p>
					{" "}
					Some Talents we <br /> have Shortlisted{" "}
				</p>
				<div className="viewBtnContainer">
					<div>
						<p>View all</p>
					</div>
					<div>
						<img src={arrow} alt="arrow" />
					</div>
				</div>
			</div>
			<div className="talentCard">
				<div>
					<img className="talentImg" src={talent2} alt="Talent Image" />
				</div>
				<div className="talentName">
					<h4>Gloria Smith</h4>
					<p>Javascript Developer</p>
				</div>
				<div className="talentLevel">
					<p>Mid - Senior Level </p>
				</div>
			</div>
			<div className="talentCard">
				<div>
					<img className="talentImg" src={talent1} alt="Talent Image" />
				</div>
				<div className="talentName">
					<h4>James Adeboye</h4>
					<p>Python Developer</p>
				</div>
				<div className="talentLevel">
					<p>Mid - Senior Level </p>
				</div>
			</div>

		</div>
	);
}

export default index
