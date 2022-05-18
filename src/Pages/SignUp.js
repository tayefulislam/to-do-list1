import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init'




const SignUp = () => {



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let allError;
    let navigate = useNavigate();


    const handleSubmit = async (event) => {

        event.preventDefault()

        const name = event?.target?.name?.value;
        const email = event?.target?.email?.value;
        const password = event?.target?.password?.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })




    }


    if (error || updateError) {
        allError = `${error?.message || updateError?.message}`
    }


    if (user) {
        navigate('/')
    }

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
                                name='name'
                                className="input input-bordered w-full max-w-xs"



                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-white font-bold text-xl">Email</span>

                            </label>

                            <input type="text"
                                placeholder="Email Address"
                                name='email'
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
                                className="input input-bordered w-full max-w-xs"



                            />


                        </div>

                        <h1 className='text-white'>{allError}</h1>


                        <input className='  btn btn-glass w-full max-w-xs mt-2 font-bold text-white' type="submit" value="Sign Up" />

                    </form>

                    <p className='text-lg text-white font-bold'><small>Have a Account? <Link className='text-neutral' to='/login'>Login</Link ></small></p>





                </div>
            </div>
        </div>
    );
};

export default SignUp;