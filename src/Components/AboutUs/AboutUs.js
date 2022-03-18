import React from 'react';
import LatesNews from './../Home/LatesNews/LatesNews';

const AboutUs = () => {
	return (
		<div>
			<div className="pt-5 p-3">
				<div className="mb-3">
                    <h1 style={{ color: '#153D8F' }}>MEDICAL TEAM</h1>
				<p>our dedicated</p>
                </div>

				<div class="card-group">
					<div class="card">
						<img
							src="https://i.ibb.co/qNVKsj3/portrait-smiling-handsome-male-doctor-man.png"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<p>General Doctor</p>
							<h3>George Button</h3>
							<small>
								Proin consequat, at commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</small>
						</div>
					</div>

					<div class="card">
						<img src="https://i.ibb.co/f9r6CTW/portrait-doctor.png" alt="" className="card-img-top" />
						<div className="card-body">
							<p>Pediatrician</p>
							<h3>Sussie Wolff</h3>
							<small>
								Proin consequat, at commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</small>
						</div>
					</div>
					<div class="card">
						<img
							src="https://i.ibb.co/SNLbhmY/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-postur.png"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<p>Dental surgeon</p>
							<h3>Ashley Willson</h3>
							<small>
								Curabitur lobortis, eros eu efficitur lacinia. Proin consequat, at commodo velit magna
								cursus nisi.
							</small>
						</div>
					</div>
					<div class="card">
						<img
							src="https://i.ibb.co/Cbnbntg/cheerful-male-doctor-white-gown-portrait-2.png"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<p>Surgeon</p>
							<h3>Adam Hackett</h3>
							<small>
								Donec varius libero tortor. Proin consequat, at commodo eu luctus ipsum aliquet ut.
							</small>
						</div>
					</div>
				</div>
			</div>
			<LatesNews />
		</div>
	);
};

export default AboutUs;
