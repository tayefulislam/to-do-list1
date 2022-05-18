import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">

                <a className="btn btn-ghost normal-case text-xl">My To Do</a>
            </div>
            <div class="navbar-center hidden lg:flex">

            </div>
            <div class="navbar-end">
                <button class="btn">Login</button>
            </div>
        </div>
    );
};

export default Header;