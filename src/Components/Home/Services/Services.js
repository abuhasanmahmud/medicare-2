import React from 'react';
import Service from './../Service/Service';
const services = [
	{
		id: 1,
		img: 'https://i.ibb.co/TD3Gwgy/chirporactor-s3.png',
		name: 'Chirporactor',
		des:
			'Duis scelerisque faucibus nisi sed lacinia. Curabitur ipsum elit, cursus id dui quis, dictum laoreet neque.',
		sdes: 'Neck or back pain?'
	},

	{
		id: 2,
		img: 'https://i.ibb.co/j3jfjqT/dentis-s1.png',
		name: 'Dentis',
		des: 'Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et disdesting',
		sdes: 'For your child whitest teeths'
	},

	{
		id: 3,
		img: 'https://i.ibb.co/SynYJqL/healthcare-s4.png',
		name: 'Healthcare',
		des:
			'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely needs',
		sdes: 'For all your family needs'
	},

	{
		id: 4,
		img: 'https://i.ibb.co/8scX28K/Pediatrician-s2.png',
		name: 'Pediatrician',
		des: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly ',
		sdes: 'Children medical care'
	},

	{
		id: 5,
		img: 'https://i.ibb.co/j3mCS0S/cardiologist-s5.png',
		name: 'Cardiologist',
		des: 'Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at proing ',
		sdes: 'proin consequat a'
	},

	{
		id: 6,
		img: 'https://i.ibb.co/J2PyykP/spinaltest-s6.png',
		name: 'Spinaltest',
		des:
			'Duis scelerisque faucibus nisi sed lacinia. Curabitur ipsum elit, cursus id dui quis, dictum laoreet neque ',
		sdes: 'Children medical care'
	}
];
const Services = () => {
	return (
		<div className="mx-3 mb-4">
            <h1 className="mt-5 mb-5 bold" style={{color:"#153D8F"}}>Our Services</h1>
			<div class="row row-cols-1 row-cols-md-3 g-3">
				{services.map((service) => <Service
                 key={service.id}
                  service={service}
                   />)}
			</div>
		</div>
	);
};

export default Services;
