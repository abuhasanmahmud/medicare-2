import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
import useAuth from './../../Hooks/useAuth';
const Login = () => {
	const { user, logInWithGoogle } = useAuth();
	const location=useLocation();
    const history=useHistory();
    const redirect_url=location.state?.from || '/';

	//handel google login
	const handelGooglelogin=()=>{
		logInWithGoogle()
		 .then(result=>{
        history.push(redirect_url);
       })
	}

	
	return (
    <div className="mt-4 mb-3 bg-dark">
      <button className="btn btn-dark mb-4" onClick={handelGooglelogin}>
        sign in with google
      </button>
    </div>
  );
};

export default Login;
