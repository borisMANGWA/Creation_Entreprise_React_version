import { BiHeart } from "react-icons/bi";
import { Link } from "react-router";

export default function ProductCard({ produit }) {
  return (
    <>
      {/* Badge "NOUVEAU" ou "PROMO" */}
      <span className="absolute top-4 left-4 z-10 bg-app-accent text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
        {produit.statut}
      </span>
      {/* Badge "NOUVEAU" ou "PROMO" */}
      {/* Container Image avec effect de zoom */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-white to-gray-100 dark:from-gray-800 dark:to-app-bg aspect-square flex items-center justify-center p-6">
        <img
          src={produit.image}
          alt={produit.name}
          className="w-full h-full drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      {/* Container Image avec effect de zoom */}
      {/* Informations Produit */}
      <div className="mt-6 space-y-2 px-2">
        <div className="flex justify-between items-start flex-col">
          <div>
            <h3 className="text-xl font-bold text-app-accent transition-colors">
              Elixire Lacte :{" "}
              <span className="text-app-text group-hover:text-app-accent ">
                {produit.name}
              </span>
            </h3>
            <p className="text-sm opacity-60 font-medium text-app-text">
              {produit.titre}
              {/* L'onctuosite a l'etat pur */}
            </p>
          </div>
          <span className="text-2xl font-black text-app-accent">
            {produit.price}
          </span>
          {/* Informations Produit */}
          {/* Description courte */}
          <p className="text-xs opacity-70 line-clamp-2 text-app-text">
            {produit.description}
          </p>
          {/* Description courte */}
          {/* Actions */}
          <div className="pt-4 flex items-center gap-2">
            <Link
              to="/Sale"
              state={{ fromProductCard: true, id: produit.id }}
              className="flex-1 bg-app-accent hover:bg-app-accent-hover text-white font-bold p-3 rounded-xl shadow-lg shadow-app-accent/30 transition-all active:scale-95"
            >
              Je Craque !
            </Link>
            <button className="p-3 rounded-xl text-app-text border border-app-border hover:bg-app-accent/10 transition-colors">
              <BiHeart />
            </button>
          </div>
        </div>
      </div>
      {/* Actions */}
    </>
  );
}
