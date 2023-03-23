import React from "react";
import { NavLink } from "react-router-dom";

type Prop = {
  className?: string;
};
const Navbar = ({ className = "" }: Prop) => {
  return (
    <nav
      className={`${className} flex h-[60px] w-full justify-center bg-blue-600 px-10`}
    >
      <ul className={`flex w-full max-w-[900px] items-center justify-between`}>
        <NavLink className="link size text-xl font-bold text-white" to="/">
          DEMO Streaming
        </NavLink>
        <div className="flex items-center gap-8">
          <NavLink className="link text-white" to={"/login"}>
            Log in
          </NavLink>
          <NavLink
            className="link hidden bg-gray-700 px-4 py-1 text-white sm:block"
            to={"/free-trial"}
          >
            Start your free trial
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
