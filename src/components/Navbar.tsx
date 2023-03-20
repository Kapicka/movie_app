import React from 'react';
import {NavLink} from "react-router-dom";

type Prop = {
    className?: string
}
const Navbar = ({className = ''}: Prop) => {
    return (
        <div className="flex justify-center  w-full px-10 bg-blue-600 h-[60px] ">
            <nav className={`${className} flex items-center justify-between max-w-[900px] w-full`}>
                <NavLink className="link text-white size text-lg font-bold" to="/">DEMO Streaming</NavLink>
                <div className="flex gap-8 items-center">
                    <NavLink className="link text-white" to={'/login'}>Log in</NavLink>
                    <NavLink className="link bg-gray-700 text-white px-4 py-1" to={'/free-trial'}>Start your free
                        trial</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
