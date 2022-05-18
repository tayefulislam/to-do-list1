import React from 'react';

import { Link } from 'react-router-dom';




const handleSubmit = (event) => {

    event.preventDefault()






}

const SignUp = () => {

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body bg-blue-500">
                    <h2 className="text-center text-2xl font-bold text-white">Sign Up</h2>


                    <form onSubmit={handleSubmit} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Name</span>

                            </label>

                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"



                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-white font-bold text-xl">Email</span>

                            </label>

                            <input type="text"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"

                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-white font-bold text-xl">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"



                            />


                        </div>


                        <input className='  btn btn-glass w-full max-w-xs mt-2 font-bold text-white' type="submit" value="Sign Up" />

                    </form>

                    <p className='text-lg text-white font-bold'><small>Have a Account? <Link className='text-neutral' to='/login'>Login</Link ></small></p>





                </div>
            </div>
        </div>
    );
};

export default SignUp;