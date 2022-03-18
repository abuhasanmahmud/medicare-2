import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
	const handelRegi=()=>{
		console.log("click")
	}
	console.log('ssla');
	return (
		<div className="mt-3">
			<form action="" className="w-50 mx-auto login-form mb-3">
				<p>
					<input
						type="text"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="enter your name"
					/>
				</p>
				<p>
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="enter your email"
					/>
				</p>
				<p>
					<input
						type="password"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="password"
					/>
				</p>
				<p>
					<input onClick={handelRegi} type="submit" value="Register now" />
				</p>
				<p>
					allredy have accout ? <Link to="/login">Login now</Link>
				</p>
			</form>
			
		</div>
	);
};

export default Register;
