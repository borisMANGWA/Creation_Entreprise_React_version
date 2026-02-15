import React from "react";
import { NavLink } from "react-router";
import { NavLinks } from "../Data/Data";

function ResponsiveNavBar() {
  return (
    <div className="fixed left-0 top-0 w-[65vw] h-screen bg-zinc-700 z-20 pl-5 pt-5 pb-10 pr-2 md:hidden flex flex-col justify-between items-start">
      <div className="flex gap-4 justify-center items-center">
        <img src="User1.jpg" alt="" 
          className="size-19 rounded-full" />
        <div>
          <h1 className="font-bold text-2xl">General de Gaule</h1>
          <h2>Admin</h2>
        </div>
      </div>
      <nav className="font-bold flex flex-1 mt-5 flex-col items-center gap-5 pl-10">
        {NavLinks.map((link, index) => (
          <NavLink
            key={index}
            className={({isActive}) => isActive ? "active-nav-link nav-link" : "nav-link"}
              onClick={() => setShowMenu(!showMenu)}
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="text-center italic">
        <p>Made in 2026 &copy; by General de Gaule.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default ResponsiveNavBar;
