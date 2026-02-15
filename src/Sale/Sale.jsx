import { useOutletContext } from "react-router";
import { ProductsTable, SelectedProducts } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

export default function Sale() {
  const theme = useOutletContext();
  const title = SelectedProducts[0].title;

  const [active, setActive] = useState(null);
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={`${theme === "dark" ? "bg-gray-600" : "bg-gray-200"}`}>
      {/* ! HEADER */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        speed={2000}
        loop
        className="h-100 shadow-md shadow-gray-700"
      >
        {SelectedProducts.map((data, index) => (
          <SwiperSlide className="w-full h-full" key={index}>
            <Hero
              title={data.title}
              setShowForm={setShowForm}
              bgImg={data.bgImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* PURCHASE FORM */}
      {showForm && (
        <div className="md:justify-center flex">
          <div className="bg-amber-100 md:w-[50%] flex flex-col rounded-md p-2 italic">
            <div className="italic pl-2.5">
              <h1 className="font-bold text-4xl">Purchase Oder</h1>
              <p>Please fill the form to continu </p>
            </div>
            <div className="flex flex-col my-3">
              {/* My Information */}
              <div className="flex container-info">
                <h1 className="text-bold">You Name</h1>
                <div className="container-multiple">
                  <label htmlFor="firstName">
                    First Name <input type="text" id="firstName" />
                  </label>
                  <label htmlFor="lastName">
                    Last Name <input type="text" id="lastName" />
                  </label>
                </div>
              </div>
              <div className="flex container-info">
                <h1 className="text-bold">Your Email</h1>
                <label htmlFor="email" className="w-[50%]">
                  Email <input type="email" name="email" id="email" />
                </label>
              </div>
              <div className="flex container-info">
                <h1 className="text-bold">Shipping Address</h1>
                <div className="container-multiple">
                  <label htmlFor="city">
                    City <input type="text" />
                  </label>
                  <label htmlFor="quartier">
                    Neighborhood <input type="text" />
                  </label>
                  <label htmlFor="address">
                    Address <input type="text" />
                  </label>
                </div>
              </div>
              {/* My Information */}
              {/* My payment methode */}
              <div>
                <h1 className="text-bold">Payment Methods</h1>
                <label
                  htmlFor="mtn"
                  className="flex-row! gap-3 pl-10 items-center w-[80%]!"
                >
                  <input
                    type="radio"
                    onChange={() => setShow(false)}
                    name="paiement"
                    id="mtn"
                  />{" "}
                  <img
                    src="/Images/mtn.logo.png"
                    className="w-20 h-15"
                    alt=""
                  />
                </label>
                <label
                  htmlFor="orange"
                  className="flex-row! gap-3 pl-10 items-center w-[80%]!"
                >
                  <input
                    type="radio"
                    onChange={() => setShow(false)}
                    name="paiement"
                    id="orange"
                  />{" "}
                  <img
                    src="/Images/orange-logo.png"
                    className="w-20 h-15"
                    alt=""
                  />
                </label>
                <label htmlFor="other" className="block! pl-10 text-black!">
                  <input
                    type="radio"
                    onChange={() => setShow(true)}
                    name="paiement"
                    id="other"
                  />{" "}
                  OTHER{" "}
                </label>
                {show && (
                  <input
                    type="text"
                    placeholder="Please entrer the other method here..."
                  />
                )}
              </div>
              {/* My payment methode */}
            </div>
            <div className="flex justify-center w-full">
              <button onClick={() => setShowForm(false)} className="px-20 py-1 cursor-pointer hover:font-bold border rounded-md bg-blue-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* PURCHASE FORM */}
      <div className="my-10 px-1">
        <h1 className="font-bold italic text-center text-2xl pl-5">
          See the same products
        </h1>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: "auto" },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          slidesPerView={1.2}
          speed={2000}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop
          centeredSlides
          centeredSlidesBounds
          centerInsufficientSlides
          pagination={{ clickable: true }}
          initialSlide={2}
          onSlideChange={(index) => setActive(index.realIndex)}
          className="h-80 py-10 my-10 max-w-5xl mx-auto"
        >
          {ProductsTable.map(
            (image, i) =>
              title == image.name && (
                <SwiperSlide className="h-full w-auto!">
                  <div
                    className={` ${active == i && "active-image"} image-swiper rounded-md h-70 mt-5 w-80 relative`}
                  >
                    <img
                      src={image.image}
                      className={`rounded-md h-full w-full`}
                    />
                    <h1 className="absolute top-2 left-3 gradiant-title font-bold text-2xl">
                      Yaourt a la {image.name}
                    </h1>
                  </div>
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>
      {/* ! HEADER */}
      {/* BODY */}
      <h1 className="gradiant-title font-bold italic text-3xl text-center my-9">
        | Also See Those Products
      </h1>
      <div className="flip-card">
        {ProductsTable.map((product, index) => (
          <Products product={product} index={index} theme={theme} />
        ))}
      </div>
      {/* BODY */}
    </section>
  );
}

function Hero({ title, setShowForm, bgImg }) {
  return (
    <div
      className={`${bgImg} bg-no-repeat bg-cover bg-center shadow-md shadow-gray-500 h-full`}
    >
      <div className="p-10 font-bold flex flex-col items-start justify-center gap-10">
        <h1 className="italic text-[2.6rem] md:text-7xl my-2.5 gradiant-title">
          {title}
        </h1>
        <p className="w-99 sm:w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolore
          illo ea rem similique porro earum! Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <button onClick={() => setShowForm(true)} className="button-learn-more">
          Buy Now
        </button>
      </div>
    </div>
  );
}
function Products({ product, index, theme }) {
  return (
    <div className={`flip-card-inner ${product.bgImg}`} key={index}>
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
