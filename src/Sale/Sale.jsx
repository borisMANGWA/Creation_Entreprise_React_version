import { Link, useLocation } from "react-router";
import { FilterTable, ProductsTable } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Sale() {
  const location = useLocation();
  const IdProduit = location.state?.id || ProductsTable[0].id;
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState();

  
  // ? Fontcion pour trouver les produit de meme categorie en filtrant le tableau "ProductsTable"
  const produitSelected = ProductsTable.find((p) => p.id == IdProduit);
  const TabSameProd = ProductsTable.filter((produit) => {
    if (!produit.name.includes(produitSelected.name)) return;
    return produit;
  });

  // ? Fontcion pour trouver les produits qui correspondents a la categorie selectionner en filtrant le tableau "ProductsTable"
  const VisibleProduit = ProductsTable.filter((produit) => {
    if (filter && !produit.name.includes(filter)) return;
    return produit;
  });
  return (
    <section className="bg-app-bg text-app-text transition-colors duration-300 relative">
      {/* ! HEADER */}
      <Hero data={produitSelected} />
      <div className="bg-app-bg my-10 px-1">
        <h2 className="text-4xl md:text-5xl text-center font-black dark:text-black/70 leading-tight tracking-tight">
          Produits de la meme categorie
        </h2>
        {/* Bloc Image avec effet de levitation au survol */}
        <div className="flex justify-center p-5">
          <Carousel
            products={TabSameProd}
            active={active}
            setActive={setActive}
          />
        </div>
        {/* Bloc Image avec effet de levitation au survol */}
      </div>
      {/* ! HEADER */}
      {/* BODY */}
      <h1 className="text-4xl md:text-5xl bg-app-bg text-center font-black dark:text-black/70 leading-tight tracking-tight">
        | Regardez egalement ces autres Produits
      </h1>
      {/* Filter */}
      <div className="container bg-app-bg">
        <div className="grid grid-cols-3 md:flex px-4 gap-7 md:justify-center pt-10">
          {FilterTable.map((elt, index) => (
            <h1
              onClick={() => setFilter(elt.name)}
              className={`${elt.bgColor} py-1.5 px-4 rounded-md border relative font-bold italic cursor-pointer hover:opacity-80 hover:scale-105`}
              key={index}
            >
              {elt.name}
            </h1>
          ))}
        </div>
      </div>
      {/* Filter */}
      <ProductDescription features={VisibleProduit} />
      {/* BODY */}
    </section>
  );
}

function Hero({ data }) {
  const [Qte, setQte] = useState(1);
  const Increment = () => {
    setQte((count) => count + 1);
    console.log(Qte);
  };
  const Decrement = () => {
    setQte((count) => (count <= 0 ? count : count - 1));
    console.log(Qte);
  };
  return (
    <div className="relative h-[125vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl">
      {/* Image de fond avec filtre pour le contraste */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.image}
          alt="Yaourt artisanale"
          className="w-full h-full object-cover scale-105"
        />
        {/* Overlay: Pour la lisibilite */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      {/* Image de fond avec filtre pour le contraste */}
      {/* Contenu Texte */}
      <div className="relative z-10 text-center md:px-4 w-full">
        <h1 className="text-5xl md:text-7xl font-black text-app-accent leading-tight md:mb-0 md:mt-0 mt-10 mb-6">
          {data.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full place-items-center">
          <p className="text-lg md:text-xl text-white/90 font-medium md:mb-0 mb-3 max-w-2xl mx-auto leading-6">
            {data.description}
          </p>
          <span>
            <h2 className="text-2xl md:text-5xl md:my-4 font-black text-app-accent">
              17.00 $
            </h2>
            <p className="flex items-center justify-between font-bold text-xl text-app-text cursor-default">
              <FaMinus
                className="border border-app-border rounded-full p-2 size-7 hover:p-1 mx-4"
                onClick={Decrement}
              />
              Quantite : {Qte <= 9 ? "0" + Qte : Qte}
              <FaPlus
                className="border border-app-border rounded-full p-2 size-7 hover:p-1 mx-4"
                onClick={Increment}
              />
            </p>
          </span>
          <div className="border border-app-border rounded-md bg-slate-50 md:mb-0 mb-10 p-5">
            <table className="text-start text-black/70">
              <thead>
                <tr className="text-2xl bg-app-bg py-1!">
                  <th>Caracteristiques</th> <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-200">
                  <td>Format</td>
                  <td>Pot individuel de 120g</td>
                </tr>
                <tr className="bg-gray-300">
                  <td>Texture</td>
                  <td>Brassee et veloutée</td>
                </tr>
                <tr className="bg-gray-200">
                  <td>Conservation</td>
                  <td>Au frais entre 0c et +6c</td>
                </tr>
                <tr className="bg-gray-300">
                  <td>Nutri-Score</td>
                  <td>A (Excellent)</td>
                </tr>
                <tr className="bg-gray-200">
                  <td>Allergenes</td>
                  <td>Contient du lactose</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Link
          to="/Purchase"
          className="bg-app-accent hover:bg-app-accent-hover text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-app-accent/40 transition-all transform hover:scale-110 active:scale-95"
        >
          Commander Mes Delices
        </Link>
      </div>
      {/* Contenu Texte */}
    </div>
  );
}

function Carousel({ products, active, setActive }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1.3}
      breakpoints={{ 640: { slidesPerView: 2 }, 728: { slidesPerView: 3 } }}
      loop
      pagination={{ clickable: true }}
      spaceBetween={5}
      centeredSlides
      centerInsufficientSlides
      centeredSlidesBounds
      onSlideChange={(index) => setActive(index.realIndex)}
      className="md:w-[70%] w-full"
    >
      {products.map((prod, i) => (
        <SwiperSlide key={i} className="lg:w-80! w-full">
          <div
            className={`relative p-6 rounded-[3rem] ${active == i && "scale-100 bg-app-text!"} scale-90 w-full sm:w-70 lg:w-80! dark:bg-app-card transition-all duration-500 hover:rotate-2 shadow-inner group`}
          >
            <img
              src={prod.image}
              className="rounded-[2.5rem] object-cover w-full aspect-square transform transition-transform duration-700 hover:scale-105"
              alt=""
            />
            <h3
              className={`${active == i && "text-[1rem] md:text-xl"} font-bold text-center text-app-accent`}
            >
              {prod.titre}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
