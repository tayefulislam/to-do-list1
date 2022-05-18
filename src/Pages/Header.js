import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);



    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">

                <a className="btn btn-ghost normal-case text-xl">My To Do</a>
            </div>
            <div class="navbar-center hidden lg:flex">

            </div>
            <div class="navbar-end">
                {
                    user && <button onClick={() => signOut(auth)} class="btn">Login Out</button>
                }
            </div>
        </div>
    );
};

export default Header;