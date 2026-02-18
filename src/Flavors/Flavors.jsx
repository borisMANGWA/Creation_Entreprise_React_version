// ! Icon's imports
import { FcApproval } from "react-icons/fc";
import { BsArrowDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

// ! Carousel's imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// ! Other's imports
import { DatasCarouselFlavor, ProductsTable, FilterTable } from "../Data/Data";
import { Link } from "react-router";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function Flavors() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState();
  
  // ? Fonction pour filtrer le tableau de produit et n'afficher que ceux qui correspondent a la recherche
  const VisibleProduit = ProductsTable.filter((produit) => {
    if (filter && !produit.name.includes(filter)) return;
    return produit;
  });

  return (
    <section className="bg-app-bg">
      {/* ! HEADER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={2000}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        loop
      >
        {DatasCarouselFlavor.map((data, index) => (
          <SwiperSlide key={index}>
            <Hero data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ! HEADER */}
      {/* ! MAIN Caroussel */}
      <div className="container my-4">
        {/* Head */}
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center m-1 mt-2">
          <BestProd product={ProductsTable[0]} />
          <form className="space-y-3 md:h-[80%] border-app-border border shadow-2xl flex flex-col justify-center rounded-2xl bg-app-bg px-10 py-5 hover:shadow-app-accent">
            {/* # HEADER DU FORMULAIRE */}
            <div className="text-center mb-3">
              <h2 className="text-4xl font-bold bg-linear-to-r from-app-accent to-pink-500 bg-clip-text text-transparent mb-2">
                Localisation pres de vous
              </h2>
            </div>
            {/* # HEADER DU FORMULAIRE */}
            {/* # Section identite */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">
                  Votre Pays
                </label>
                <input
                  type="text"
                  placeholder="Ex: Cameroon"
                  className="w-full p-4 rounded-2xl bg-app-input border border-app-border focus:ring-2 focus:ring-app-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">
                  Votre Ville
                </label>
                <input
                  type="text"
                  placeholder="Ex: Bafoussam"
                  className="w-full p-4 rounded-2xl bg-app-input border border-app-border focus:ring-2 focus:ring-app-accent outline-none transition-all"
                />
              </div>
            </div>
            {/* # Section identite */}
            {/* # Section Validation */}
            <div className="pt-8">
              <button className="w-full bg-app-accent hover:bg-app-accent-hover text-white font-bold py-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-4">
                <BiSearch /> Rechercher
              </button>
            </div>
          </form>
        </div>
        {/* Head */}
        {/* BODY */}
        <div className="carousel-container">
          <Carousel
            products={ProductsTable}
            active={active}
            setActive={setActive}
          />
        </div>
        {/* BODY */}
      </div>
      {/* ! MAIN Caroussel */}
      {/* ! PRODUCTS SECTION */}
      <div className="container my-4">
        <h1 className="gradiant-title font-bold italic text-5xl text-center my-9">
          | Trouvez le produit parfait
        </h1>
        {/* Filter */}
        <div className="container">
          <div className="grid grid-cols-3 md:flex px-4 gap-7 md:justify-center mb-10">
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
        {/* Visible Products */}
        <div className="flip-card">
          {VisibleProduit.map((product, index) => (
            <div
              key={index}
              className="group relative bg-app-card rounded-4xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border-app-accent/20 border-b-8 hover:border-app-accent transform hover:-translate-y-2"
            >
              <ProductCard produit={product} />
            </div>
          ))}
        </div>
        {/* Visible Products */}
      </div>
      {/* ! PRODUCTS SECTION */}
    </section>
  );
}

function Hero({ data }) {
  return (
    <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl">
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
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          {data.title1} <br />{" "}
          <span className="text-app-accent"> {data.title2} </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
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
function Carousel({ products, active, setActive }) {
  return (
    <Swiper
      modules={[Pagination]}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
      slidesPerView={1.3}
      loop
      pagination={{ clickable: true }}
      spaceBetween={15}
      centeredSlides
      onSlideChange={(index) => setActive(index.realIndex)}
      className="w-full"
    >
      {products.map((prod, i) => (
        <SwiperSlide key={i} className="">
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
function BestProd({ product }) {
  return (
    <div className="py-20 bg-app-bg transition-colors duration-500 w-full overflow-hidden">
      <div className="mx-auto px-6">
        <div
          className={`flex flex-col md:flex-row items-center gap-6`}
          key={product.id}
        >
          {/* Bloc Image avec effet de levitation au survol */}
          <div className="w-full md:w-80 group">
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
          <div className="w-1/2 md:w-1/2 space-y-6 relative">
            <h1 className="absolute transform rotate-35 top-0 right-0 flex items-center gap-1 text-green-500 font-bold ">
              <FcApproval size={20} /> Meilleur produit
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-app-text leading-tight tracking-tight">
              {product.name}
            </h2>
            <div className="w-16 h-1.5 bg-app-accent rounded-full transition-all duration-500 hover:w-32"></div>
            <p className="text-lg md:text-md line-clamp-4 text-app-text opacity-75 leading-relaxed font-medium">
              {product.description}
            </p>
            <Link
              to="/Sale"
              state={{ fromProductDescription: true, id: product.id }}
            >
              <button className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-app-border text-app-accent font-bold hover:bg-app-accent hover:text-white transition-all duration-300 transform active:scale-95 uppercase text-xs tracking-widest">
                En savoir plus
              </button>
            </Link>
          </div>
          {/* Bloc Text */}
        </div>
      </div>
    </div>
  );
}
