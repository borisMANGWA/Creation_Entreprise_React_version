import { NavLink } from "react-router";
import { NavLinks } from "../Data/Data";

function ResponsiveNavBar() {
  return (
    <div className="fixed left-0 top-0 w-[60vw] h-screen pl-5 pt-5 pb-10 pr-2 md:hidden flex flex-col justify-between items-start -translate-x-6 max-w-6xl z-50 bg-white/30 dark:bg-black/90 border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
      <div className="flex gap-4 justify-center items-center">
        <img src="User1.jpg" alt="" 
          className="size-17 rounded-full" />
        <div className="text-start">
          <h1 className="font-semibold text-xl">Général de Gaule</h1>
          <h2 className="text-white/70 font-medium">Admin</h2>
        </div>
      </div>
      <nav className="font-bold flex flex-1 mt-5 flex-col items-center gap-5 pl-10">
        {NavLinks.map((link, index) => (
          <NavLink
            key={index}
            className={({isActive}) => isActive ? "active-nav-link-new nav-link-new" : "nav-link-new"}
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="text-center italic text-md font-medium">
        <p>Made in 2026 &copy; by General de Gaule.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default ResponsiveNavBar;
