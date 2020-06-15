import React from 'react'
import arrow from "../../images/arrow.png"
import downArrow from "../../images/downArrow.png"
import "./index.css"
const index = () => {
  return (
		<div className="faqContainer content">
			<div className="shortlist ">
				<p>
					If you need more information
					<br />
					<a href="#">contact us</a>
				</p>
				<div className="viewBtnContainer">
					<div>
						<p>View More</p>
					</div>
					<div>
						<img src={arrow} alt="arrow" />
					</div>
				</div>
			</div>

			<div className="listContainer">
				<div className="listItem">
					<div className="questions">
						<p>Do I have to pay a deposit to talk to a developer?</p>
					</div>
					<div className="downArrow">
						<img src={downArrow} />
					</div>
				</div>
				<hr />
				<div className="listItem">
					<div className="questions">
						<p>
							How long does the process usually take to get a developer started?
						</p>
					</div>
					<div className="downArrow">
						<img src={downArrow} alt="down Arrow" />
					</div>
				</div>
				<hr />
				<div className="listItem">
					<div className="questions">
						<p>Do I have to pay a deposit to talk to a developer?</p>
					</div>
					<div className="downArrow">
						<img src={downArrow} alt="down Arrow" />
					</div>
				</div>
				<hr />
				<div className="listItem">
					<div className="questions">
						<p>Do I have to pay a deposit to talk to a developer?</p>
					</div>
					<div className="downArrow">
						<img src={downArrow} alt="down Arrow" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default index




