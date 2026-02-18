import { useOutletContext } from "react-router";
import { PartnersData } from "../Data/Data";

export default function About() {
  const theme = useOutletContext();
  return (
    <section className="bg-app-bg text-app-text">
      {/* ! About Ets MBOA MILK Sarl */}
      <div className="flex flex-col md:flex-row md:justify-center items-center mx-4 mb-10 mt-30">
        <div className="md:w-[50%] p-2">
          <h2 className="text-3xl lg:text-[2.5rem] text-start font-black my-3 ml-5">
            | A propos de <span className="text-app-accent">"Ets MBOA MILK Sarl"</span>
          </h2>
          <h2 className="text-2xl mt-1.5 text-app-accent font-bold">
            Notre Histoire, Notre Passion
          </h2>
          <p className="text-start lg:text-justify space-y-6 tracking-wider font-medium px-3">
            Née d'une passion pour les produits laitiers authentiques, La
            lactiere s'engage a ramener le vrai gout du yaourt dans votre
            cuisine. Chaque pot est le resultat d'un savoir-faire tranditionnel
            respectueux de la nature et de votre santé.
          </p>
        </div>
        <div className="md:w-[40%] group-hover:rotate-2 transform h-100 object-cover flex items-center justify-center bg-app-card rounded-4xl p-10 group">
          <img
            src="./Logo1.png"
            className="w-full group-hover:scale-105 transition-transform duration-500 transform h-full rounded-md"
            alt=""
          />
        </div>
      </div>
      {/* ! About Ets MBOA MILK Sarl */}
      {/* ! About Elixire lactee */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center mx-3 my-10">
        <div className="md:w-[50%] p-2">
          <h2 className="text-3xl lg:text-[2.5rem] text-start font-black my-3 ml-5">
            | A Propos de{" "}
            <span className="text-app-accent">"Elixire lactee"</span>
          </h2>
          <h2 className="text-2xl mt-1.5 text-app-accent font-bold">
            L'Art du Yaourt d'exception
          </h2>
          <p className="text-start lg:text-justify space-y-6 tracking-wider font-medium px-3">
            Bienvenue dans l'univers de l'Elixire Lacté. Notre mission est de
            transformer chaque instant de dégustation en un moment de pure
            magie. Nous sélectionnons le meilleur du lait et des fruits pour
            créer des recettes qui ne sont pas de simples yaourts, mais de
            veritables élixirs de bien-etre et de gourmandise. La passion du
            gout, la pureté des ingrédients.
          </p>
        </div>
        <div className="md:w-[40%] group-hover:rotate-2 transform h-100 object-cover flex items-center justify-center bg-app-card rounded-4xl p-10 group">
          <img
            src="./Images/fond.jpg"
            className="w-full group-hover:scale-105 transition-transform duration-500 transform h-full rounded-md"
            alt=""
          />
        </div>
      </div>
      {/* ! About Elixire lactee */}
      {/* ! About Our Partners */}
      <div className="container my-5 p-2">
        <h2 className="text-3xl lg:text-[2.5rem] text-start font-black my-3 ml-5">
          | A propos de{" "}
          <span className="text-app-accent">Nos Partenaires </span>
        </h2>
        <h2 className="text-2xl pl-6 pb-3 mt-1.5 text-app-accent font-bold">
          Ils Nous Font Confiance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-5 gap-5 place-items-center">
          {PartnersData.map((partner) => (
            <div
              className={`flex flex-col justify-center gap-5 items-center px-6.5 w-full md:w-80 lg:w-100 h-100 rounded-3xl shadow-xl shadow-gray-400 bg-app-card text-app-text group`}
            >
              <img
                src={partner.img}
                className={`size-30 p-1 object-cover border-2 group-hover:-rotate-20 transform transition-transform rounded-full mb-6.25 ${theme === "dark" ? "border-white" : "border-gray-400"}`}
              />
              <h2 className="text-3xl font-black">{partner.name}</h2>
              <p className="text-start lg:text-justify space-y-6 tracking-wider font-medium px-3 line-clamp-3">
                {partner.description}
              </p>
              <a
                href={partner.link}
                className={`border-app-border text-[15px] font-bold py-2.5 px-5 rounded-[10px] border transition-all duration-300 hover:scale-[1.1]`}
              >
                Lire la suite
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* ! About Our Partners */}
    </section>
  );
}
