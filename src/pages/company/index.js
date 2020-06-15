import React from 'react'
import arrow from "../../images/arrow.png"
import quote from "../../images/quote.png"
import man2 from "../../images/man2.png"
import "./index.css"
const index = () => {
  return (
		<div>
			<div className="content companyContainer">
				<div className="shortlist dText">
					<p>
						{" "}
						What Companies <br /> have to Say{" "}
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
        <div className="secondCompany">
          <div className="companyCard">
          <div className="cardDetails">
            <div className="quote">
						<img src={quote} alt="quote" />
					   </div>
					<div className="cardText">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat. Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit esse molestie consequat, vel illum dolore eu
							feugiat nulla facilisis at vero eros et accumsan et iusto odio
							dignissim qui blandit praesent luptatum zzril delenit augue duis
							dolore te feugait nulla facilisi
						</p>
					</div>
					<div className="cardName">
						<p>Ada Daniels, CEO</p>
					</div>
          </div>

          <div className="companyImg">
            <img src={man2} alt="CEO Image" />
          </div>
				</div>
        <div className="companyCard">
          <div className="cardDetails">
            <div className="quote">
						<img src={quote} alt="quote" />
					   </div>
					<div className="cardText">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat. Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit esse molestie consequat, vel illum dolore eu
							feugiat nulla facilisis at vero eros et accumsan et iusto odio
							dignissim qui blandit praesent luptatum zzril delenit augue duis
							dolore te feugait nulla facilisi
						</p>
					</div>
					<div className="cardName">
						<p>Ada Daniels, CEO</p>
					</div>
          </div>

          <div className="companyImg">
            <img src={man2} alt="CEO Image" />
          </div>
				</div>
        </div>

			</div>
			<div className="emptyContainer"></div>
		</div>
	);
}

export default index
