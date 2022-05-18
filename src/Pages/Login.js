import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let allError;


    if (loading) {
        <Loading></Loading>
    }


    if (error) {
        allError = `${error.message}`
    }
    if (user) {

        navigate(from, { replace: true });

    }



    const handleSubmit = (event) => {

        event.preventDefault()

        const email = event?.target?.email?.value;
        const password = event?.target?.password?.value;

        console.log(email, password)

        signInWithEmailAndPassword(email, password)



    }



    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-blue-500">
                        <h2 className="text-center text-2xl font-bold text-white">Login</h2>


                        <form onSubmit={handleSubmit} >




                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text  text-white font-bold text-xl">Email</span>

                                </label>

                                <input type="text"
                                    placeholder="Email Address"
                                    name='email'
                                    required
                                    className="input input-bordered w-full max-w-xs"

                                />



                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text  text-white font-bold text-xl">Password</span>

                                </label>

                                <input type="password"
                                    placeholder="Password"
                                    name='password'
                                    required
                                    className="input input-bordered w-full max-w-xs"



                                />


                            </div>

                            <h1 className='text-white'>{allError}</h1>


                            <input className='  btn btn-glass w-full max-w-xs mt-2 font-bold text-white' type="submit" value="Login" />

                        </form>

                        <p className='text-lg text-white font-bold'><small>Don't Have a Account? <Link className='text-neutral' to='/register'>SignUp</Link ></small></p>





                    </div>
                </div>
            </div>




        </div>
    );
};

export default Login;