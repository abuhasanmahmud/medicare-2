import React from 'react';
import './Footer.css';
import reportWebVitals from './../../reportWebVitals';
const Footer = () => {
	return (
		<div className="bg-dark text-white align-center p-5">
			<div className="row p-3">
				<div className="col-lg-4 col-md-4 com-sm-12">
					<img className="img-fluid" src="https://i.ibb.co/JBtSqxb/medicare-logo-white.png" alt="" />
					<p>
						Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis
						tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus
						magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.
					</p>
				</div>
				<div className="col-lg-4 col-md-4 com-sm-12">
					<h5 className="mb-3">Recent Posts</h5>
					<div className="img d-flex justify-content-around">
						<img
							className="img-fluid"
							src="https://i.ibb.co/7XXQHJp/shutterstock-159016388-300x300.png"
							alt=""
						/>
						<div>
							<small>OCTOBER 18, 2015</small>
							<p>
								2015 Best USA <br />Hospitals and Clinics
							</p>
						</div>
					</div>
					
				</div>
				
				<div className="col-lg-4 col-md-4 com-sm-12" >
                    <h4>Our services</h4>
                    <p>Appointments</p>
                    <p>Working hours</p>
                    <p>Cost calculator</p>
                    <p>Procedures</p>
                    <p>Special offers</p>
                </div>
			</div>
            <hr/>
            <p>Copyright by developermahmud 2021. All rights reserved.</p>
		</div>
	);
};

export default Footer;
