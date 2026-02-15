import { FaFacebook, FaStream, FaTwitter, FaXbox } from "react-icons/fa";
import { NavLinks } from "../Data/Data";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer({ theme }) {
  return (
    <div className={`${theme === "dark" ? "bg-black/80 text-white/90" : "bg-gray-200 text-black/90"} `}>
      <div
        className={`min-h-30 p-7 flex gap-10 md:gap-38 mt-auto flex-col items-center md:flex-row`}
      >
        <div className="md:max-w-[40%] flex flex-col gap-6">
          <div className="center-inline gap-1! ">
            <img
              src="/Images/Logo_Entreprise.jpg"
              alt="Logo"
              className="size-13 rounded-full"
            />
            <h2 className="font-bold italic text-3xl">La Lactiere</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dignissimos, veritatis magni perspiciatis quos non impedit?
          </p>
          <div className="center-inline gap-2! ">
            <FaFacebook className="hover:text-amber-400 size-6" />
            <FaXbox className="hover:text-amber-400 size-6" />
            <FaTwitter className="hover:text-amber-400 size-6" />
            <FaXTwitter className="hover:text-amber-400 size-6" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div>
            <h2 className="font-bold text-xl">Produits</h2>
            <nav className="flex flex-col">
              {NavLinks.map((link, index) => (
                <Link
                  key={index}
                  className="hover:border-b-amber-400 hover:text-amber-400 hover:pl-1.5 hover:border-l-2"
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-bold text-xl">Produits</h2>
            <nav className="flex flex-col">
              {NavLinks.map((link, index) => (
                <Link
                  key={index}
                  className="hover:border-b-amber-400 hover:text-amber-400 hover:pl-1.5 hover:border-l-2"
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-bold text-xl">Produits</h2>
            <nav className="flex flex-col">
              {NavLinks.map((link, index) => (
                <Link
                  key={index}
                  className="hover:border-b-amber-400 hover:text-amber-400 hover:pl-1.5 hover:border-l-2"
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="text-center italic">
        <p>Made in 2026 &copy; by General de Gaule.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
