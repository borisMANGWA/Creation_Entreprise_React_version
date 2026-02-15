import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { DatasCarouselFlavor, ProductsTable, FilterTable } from "../Data/Data";
import { useOutletContext } from "react-router";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FcApproval } from "react-icons/fc";


export default function Flavors() {
  const theme = useOutletContext();
  const [active, setActive] = useState(null);
  return (
    <section className={`${theme === "dark" ? "bg-gray-600" : "bg-gray-200"}`} >
      {/* ! HEADER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={2000}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        loop
        onSlideChange={() => console.log("Slide Change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-100 shadow-md shadow-gray-700"
      >
        {DatasCarouselFlavor.map((data, index) => (
          <SwiperSlide className="w-full h-full" key={index}>
            <Hero title={data.title} bgImg={data.bgImg} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ! HEADER */}
      {/* ! MAIN Caroussel */}
      <div className="container my-4">
        {/* Head */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-80 gap-5 place-items-center lg:place-items-stretch m-1 mt-2">
          <div className="flex flex-col md:flex-row items-center h-130 md:h-80 md:w-185 shadow-md shadow-gray-400 md:justify-evenly bg-amber-100">
            <img
              src="/Images/yogurt4.jpg"
              alt="image du produit"
              className="h-80 md:w-100 w-full"
            />
            <div className="md:w-80 w-90 h-full p-1 flex flex-col justify-around shadow-md shadow-gray-400">
              <h1 className="text-red-500 font-bold text-4xl text-center italic">
                Fraise
              </h1>
              <p className="text-center italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nisi.
              </p>
              <h2 className="text-green-500 font-bold text-end italic pr-2 flex items-center gap-2 justify-end">
                <FcApproval size={20} /> best products
              </h2>
              <span className="flex justify-center h-[calc(100%-15rem)] items-end italic font-bold gap-10 md:gap-20">
                <button className="center-inline  gap-3.5! md:gap-5! w-25 ">
                  {" "}
                  <BsArrowLeft /> Preview{" "}
                </button>
                <button className="center-inline gap-3.5! md:gap-5! w-25 ">
                  {" "}
                  Next <BsArrowRight />{" "}
                </button>
              </span>
            </div>
          </div>
          <div className="bg-amber-100 gap-2 rounded-md shadow shadow-gray-400 lg:w-full w-80 flex flex-col items-center pb-2 lg:justify-around">
            <h1 className="gradiant-title w-full text-center font-bold text-3xl italic py-2">
              Find a location near you
            </h1>
            <input
              type="text"
              className="border rounded-md p-3"
              placeholder="Type here..."
            />
            <input
              type="text"
              className="border rounded-md p-3"
              placeholder="Type here..."
            />
            <button className="center-inline gap-2! w-40 border-2 hover:border hover:scale-105 p-1.5 rounded-md justify-center ">
              <BiSearch /> Search{" "}
            </button>
          </div>
        </div>
        {/* Head */}
        {/* BODY */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          speed={2000}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop
          centeredSlides
          pagination={{ clickable: true }}
          initialSlide={2}
          onSlideChange={(index) => setActive(index.realIndex)}
          className="h-80 flex py-10 my-10"
        >
          {ProductsTable.map((image, i) => (
            <SwiperSlide className="h-full">
              <img
                src={image.image}
                className={` ${active == i && "active-image"} image-swiper rounded-md h-70 mt-5 w-80`}
              />
              {console.log(active, i)}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* BODY */}
      </div>
      {/* ! MAIN Caroussel */}
      {/* ! PRODUCTS SECTION */}
      <div className="container my-4">
        <h1 className="gradiant-title font-bold italic text-5xl text-center my-9">
          | Find Your Perfect Products
        </h1>
        {/* Filter */}
        <div className="container">
          <div className="grid grid-cols-3 md:flex px-4 gap-7 md:justify-center mb-10">
            {FilterTable.map((elt, index) => (
              <h1 className={`${elt.bgColor} py-1.5 px-4 rounded-md border relative font-bold italic cursor-pointer hover:opacity-80 hover:scale-105`} key={index}>{elt.name}</h1>
            ))}
          </div>
        </div>
        {/* Filter */}
        <div className="flip-card">
          {ProductsTable.map((product, index) => (
            <Products product={product} key={index} theme={theme} />
          ))}
        </div>
      </div>
      {/* ! PRODUCTS SECTION */}
    </section>
  );
}

function Hero({ title, bgImg }) {
  return (
    <div
      className={`${bgImg} bg-no-repeat bg-cover bg-center shadow-md shadow-gray-500 h-full`}
    >
      <div className="p-10 font-bold flex flex-col items-start justify-center gap-3">
        <h1 className="italic text-[2.6rem] md:text-7xl my-2.5 gradiant-title">
          {title}
        </h1>
        <p className="w-99 sm:w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolore
          illo ea rem similique porro earum! Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <h3 className="text-rose-500 italic text-xl">
          Our Yogurt is simply irresistible!
        </h3>
        <button className="button-learn-more">
          Lean More <RiArrowRightDoubleFill />{" "}
        </button>
      </div>
    </div>
  );
}

function Products({ product, key, theme }) {
  return (
    <div className={`flip-card-inner ${product.bgImg}`} key={key}>
      <div className="flip-card-front">
        {" "}
        <h1 className="font-bold gradiant-title text-4xl my-2 ml-2 italic">
          Yaourt a la {product.name}
        </h1>{" "}
      </div>
      <div
        className={`flip-card-back ${theme === "dark" ? "bg-gray-600 text-white/90" : "bg-gray-100 text-black/80"}`}
      >
        <img
          src={product.image}
          alt=""
          className={`${theme === "dark" ? "border-white" : "border-gray-400"}`}
        />
        <h2>Yaourt a la {product.name}</h2>
        <p>{product.description}</p>
        <a
          href="#"
          className={`${theme === "dark" ? "border-white hover:bg-white hover:text-white" : "border-black hover:bg-gray-600 hover:text-black"}`}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
