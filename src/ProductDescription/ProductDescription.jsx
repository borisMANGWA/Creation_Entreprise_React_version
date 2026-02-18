import { Link } from "react-router";

export default function ProductDescription({ features }) {
  // ! Fonction pour scroller vers le haut a chaque fois qu'on clique sur un produit
  const handleLearnMore = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-20 bg-app-bg transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        {features.map((product, index) => (
          <div
            className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${index % 2 == 0 ? "md:flex-row-reverse" : ""}`}
            key={index}
          >
            {/* Bloc Image avec effet de levitation au survol */}
            <div className="w-full md:w-1/2 group">
              <div
                className={`relative p-6 rounded-[3rem] ${product.bgFont} dark:bg-app-card transition-all duration-500 group-hover:rotate-2 shadow-inner`}
              >
                <img
                  src={product.image}
                  className="rounded-[2.5rem] object-cover w-full aspect-square transform transition-transform duration-700 group-hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            {/* Bloc Image avec effet de levitation au survol */}
            {/* Bloc Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-app-text leading-tight tracking-tight">
                {product.name}
              </h2>
              <div className="w-16 h-1.5 bg-app-accent rounded-full transition-all duration-500 hover:w-32"></div>
              <p className="text-lg md:text-xl text-app-text opacity-75 leading-relaxed font-medium">
                {product.description}
              </p>
              <Link
                to="/Sale"
                state={{ fromProductDescription: true, id: product.id }}
              >
                <button
                  onClick={handleLearnMore}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-app-border text-app-accent font-bold hover:bg-app-accent hover:text-white transition-all duration-300 transform active:scale-95 uppercase text-xs tracking-widest"
                >
                  En savoir plus
                </button>
              </Link>
            </div>
            {/* Bloc Text */}
          </div>
        ))}
      </div>
    </div>
  );
}
