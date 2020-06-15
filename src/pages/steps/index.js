import React from 'react';
import register from "../../images/register.png";
import employ from "../../images/employ.png";
import test from "../../images/test.png";
import "./index.css"
const index = () => {
  return (
		<div className="content stepsContainer">
			<div className="headerText">
				<p>3 EASY STEPS</p>
			</div>
			<div className="steps">
				<div className="stepBox">
					<div className="stepImg">
						<img src={register} alt="register" />
					</div>
					<div className="stepTopic">
						<p>
							<b>REGISTER</b>
						</p>
						<hr />
					</div>

					<p>
						<b>
							Fill-in required information so we can help you get the a tailored
							software expert.
						</b>
					</p>
				</div>
				<div className="stepBox">
					<div className="stepImg">
						<img src={test} alt="register" />
					</div>
					<div className="stepTopic">
						<p>
							<b>TEST</b>
						</p>
						<hr />
					</div>

					<p>
						<b>Examine the capabilities of your Software Talent Virtually.</b>
					</p>
				</div>
				<div className="stepBox">
					<div className="stepImg">
						<img src={employ} alt="register" />
					</div>
					<div className="stepTopic">
						<p>
							<b>EMPLOYED</b>
						</p>
						<hr />
					</div>

					<p>
						<b>
              Go ahead to hire that
              amazing talent and
              create world-class
              products.
						</b>
					</p>
				</div>
			</div>
			<div className="btnBox">
				<button className="startBtn">
					<b>GET STARTED</b>
				</button>
			</div>
		</div>
	);
}

export default index






