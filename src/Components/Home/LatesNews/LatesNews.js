import React from 'react';

const latesnews = [ {} ];
const LatesNews = () => {
	return (
		<div className="mt-3 mb-3 p-5">
			<div className="mb-5">
				<h1 style={{ color: '#153D8F' }}>LATEST NEWS</h1>
				<p>
					Read our latest news from the company or general medical news. Feel free to ask questions in <br />comments
					for any news you find interesting.
				</p>
			</div>

			<div class="row row-cols-1 row-cols-md-3 g-3">
				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img
							src="https://i.ibb.co/NSNpr6X/doctor-with-rubber-gloves-doing-plastic-face-surgery-happy-young-female.png"
							alt=""
						/>
						<div className="card-body">
							<span>August 8, 2015</span>
							<div className="card-title">
								<h5>Your Medical Records are Safe</h5>
							</div>
							<p>
								Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
								Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc
								nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit.
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img
							src="https://i.ibb.co/gSn7brq/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-tec.png"
							alt=""
						/>
						<div className="card-body">
							<span>October 18, 2015</span>
							<div className="card-title">
								<h5>2015 Best USA Hospitals </h5>
							</div>
							<p>
								Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem
								ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
								quis nostrud exerci tation ulla.
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img src="https://i.ibb.co/SfRFhBf/packings-pills-capsules-medicines.png" alt="" />
						<div className="card-body">
							<span>September 22, 2015</span>
							<div className="card-title">
								<h5>Are drugs the best solution</h5>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
								quis nostrud exerci tation ulla. Eodem modo typi, qui nunc nobis videntur parum clari,
								fiant sollemnes in futurum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatesNews;
