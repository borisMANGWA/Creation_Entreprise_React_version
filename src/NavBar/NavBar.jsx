import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { TbMenu3, TbMenu4 } from "react-icons/tb";
import { NavLink } from "react-router";
import { NavLinks } from "../Data/Data";
import ResponsiveNavBar from "./ResponsiveNavBar";

export default function NavBar({ theme, setTheme }) {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`${theme === "dark" ? "bg-black/80 text-white/90" : "bg-gray-200 text-black/90"} container lg:max-w-[99vw] min-h-25 flex items-center justify-between px-7 min-w-[98vw] relative`}
    >
      <div className="center-inline gap-1!">
        <img
          src="/Images/Logo_Entreprise.jpg"
          alt="Logo"
          className="size-19 rounded-full"
        />
        <h2 className="font-bold italic text-5xl">La Lactiere</h2>
      </div>
      <div className="center-inline gap-5! lg:gap-20! md:gap-10!">
        <nav className="font-bold hidden md:flex items-center md:gap-5">
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              className={({isActive}) => isActive ? "active-nav-link nav-link" : "nav-link"}
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        {showMenu ? (
          <TbMenu3
            className="size-8 md:hidden"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <TbMenu4
            className="size-8 md:hidden"
            onClick={() => setShowMenu(true)}
          />
        )}
        <div>
          {/* Dark Mode Icons */}
          {theme === "dark" ? (
            <BiSolidSun
              className="text-2xl"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BiSolidMoon
              className="text-2xl"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
      {showMenu && <ResponsiveNavBar />}
    </div>
  );
}
