import { PartnersData, ProductsTable } from "../Data/Data";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { BsArrowDown } from "react-icons/bs";

function Home() {
  return (
    <section className="bg-app-bg">
      {/* ! Hero */}
      <Hero />
      {/* ! Hero */}
      {/* ! Produits */}
      <Produits />
      {/* ! Produits */}
      {/* ! About Our Partners */}
      <div className="container my-5">
        <h2 className="gradiant-title text-4xl md:text-5xl font-bold my-3 ml-5">
          | Nos Partenaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-5 gap-5 place-items-center">
          {PartnersData.map((partner) => (
            <div
              className={`flex flex-col justify-center gap-5 items-center px-6.5 w-full md:w-80 lg:w-100 h-100 rounded-3xl shadow-xl shadow-gray-400 bg-app-card text-app-text group`}
            >
              <img
                src={partner.img}
                className={`size-30 p-1 object-cover border-2 group-hover:-rotate-20 transform transition-transform rounded-full mb-6.25 border-app-border`}
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

function Hero() {
  return (
    <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl">
      {/* Image de fond avec filtre pour le contraste */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/intro.jpg"
          alt="Yaourt artisanale"
          className="w-full h-full object-cover scale-105"
        />
        {/* Overlay: Pour la lisibilite */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      {/* Image de fond avec filtre pour le contraste */}
      {/* Contenu Texte */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Le Gout Authentique <br />
          <span className="text-app-accent">du Terroir</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Découvrez l'onctuosité de nos yaourt artisanaux, prépares avec des
          fruits frais et 100% naturels pour une expérience inoubliable.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/Flavors"
            className="bg-app-accent hover:bg-app-accent-hovertext-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-app-accent/40 transition-all transform hover:scale-110 active:scale-95"
          >
            Découvrir nos saveurs
          </Link>
          <Link
            to="/About"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            Notre Histoire
          </Link>
        </div>
      </div>
      {/* Contenu Texte */}
      {/* petit indicateur de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div>
            {" "}
            <BsArrowDown className="w-5 h-5 text-white rounded-full" />
          </div>
        </div>
      </div>
      {/* petit indicateur de scroll */}
    </div>
  );
}
function Produits() {
  return (
    <div className="product-card my-10 flex flex-col gap-10 items-center">
      <h1 className="font-bold text-5xl italic gradiant-title">
        Nouveaux Produits
      </h1>
      <div className="w-full px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {ProductsTable.map((produit, index) => {
          if (index >= 5) return null;
          return (
            <div
              key={index}
              className="group relative bg-app-card rounded-4xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border-app-accent/20 border-b-8 hover:border-app-accent transform hover:-translate-y-2"
            >
              <ProductCard produit={produit} />
            </div>
          );
        })}
        <Link
          to="/Flavors"
          className="bg-app-accent/30 shadow-2xl shadow-app-text transition-all duration-500 rounded-2xl p-3 hover:bg-app-accent-hover"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}

export default Home;
