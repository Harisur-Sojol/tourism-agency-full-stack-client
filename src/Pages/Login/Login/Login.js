import React from 'react';
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {signInUsingGoogle, error} = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || "/home";
    // console.log(location)

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // console.log(redirect_uri)
            })
    }

   const handleSignIn = (e) => {
    e.preventDefault();

    
}

    return (
        <>
        <div className=''>
            <h2 className='fst-italic fw-normal login-register-heading text-center mt-5'>Please log in to your account</h2>
            <p className='  mt-4 fs-5 fst-italic text-center fw-normal'>Login with Email & Password</p>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center form-bg m-auto">
                    <form onSubmit={handleSignIn} className="w-75" >
                        <div className="mb-3 mt-5">
                            <input type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">

                            <input type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" />  
                        </div>
                        
                        <p className="text-danger">{error}</p>
                        <button className='mt-1 mb-2  google-signIn-btn' onClick={handleGoogleLogin}>
                            Login With Google</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;