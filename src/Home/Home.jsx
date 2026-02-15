import { RiArrowRightDoubleFill } from "react-icons/ri";
import { PartnersData, ProductsData } from "../Data/Data";
import { MdMoreHoriz } from "react-icons/md";
import { Link, useOutletContext } from "react-router";

function Home() {
  const theme = useOutletContext();
  return (
    <section
      className={`flex-1 ${theme === "dark" ? "bg-gray-500" : "bg-gray-200"}`}
    >
      {/* ! Hero */}
      <Hero />
      {/* ! Hero */}
      {/* ! Produits */}
      <Produits theme={theme} />
      {/* ! Produits */}
      {/* ! About Our Partners */}
      <div className="container my-5">
        <h2 className="gradiant-title text-4xl md:text-5xl font-bold my-3 ml-5">
          | Our Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 gap-5 place-items-center">
          {PartnersData.map((partner) => (
            <div
              className={`flex flex-col justify-center items-center px-6.5 w-80 lg:w-100 h-100 backface-hidden rounded-3xl shadow-md shadow-gray-400 ${theme === "dark" ? "bg-gray-600 text-white/90" : "bg-gray-100 text-black/80"}`}
            >
              <img
                src={partner.img}
                className={`size-30 p-1 object-cover border-2 rounded-full mb-6.25 ${theme === "dark" ? "border-white" : "border-gray-400"}`}
              />
              <h2 className="mb-3.75 text-3xl font-bold">{partner.name}</h2>
              <p className="mb-4 text-[14px] text-justify">
                {partner.description}
              </p>
              <a
                href={partner.link}
                className={`${theme === "dark" ? "border-white hover:text-white" : "border-black hover:text-black"} text-[15px] font-bold py-2.5 px-5 rounded-[10px] border bg-transparent  transition-all duration-300 hover:scale-[1.1]`}
              >
                Read More
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
    <div
      className={`bg-[url("/Images/yogurt3.jpg")] bg-no-repeat bg-cover bg-center shadow-md shadow-gray-500`}
    >
      <div className="p-10 font-bold flex flex-col items-start gap-3">
        <h1 className="italic text-[2.6rem] md:text-7xl my-2.5 gradiant-title">
          The Best Ingredients
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
function Produits({ theme }) {
  return (
    <div className="my-10 flex flex-col gap-10 items-center">
      <h1 className="font-bold text-5xl italic gradiant-title">NEW PRODUCTS</h1>
      <div className="w-full px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 place-items-center">
        {ProductsData.map((produit, index) => (
          <div
            key={index}
            className={`w-80 sm:w-70 lg:w-88 p-2 pb-5 flex flex-col gap-3 items-center rounded-md relative font-bold ${produit.bgFont} hover:scale-105 hover:shadow-md shadow-gray-600 cursor-default`}
          >
            <img
              src={produit.image}
              alt="Image du produit"
              className="rounded-md h-70 w-full"
            />
            <h2 className="text-xl">{produit.name}</h2>
            <p className={`${produit.textFont}`}>{produit.price}</p>
            <Link
              to="/Flavors"
              className={`p-2 rounded-md bg-white/60 hover:bg-rose-400 transition-colors duration-300 absolute bottom-0 -mb-5 shadow-md`}
            >
              View Details
            </Link>
          </div>
        ))}
        <Link
          to="/Flavors"
          className={`bg-linear-to-r ${theme == "dark" ? "form-white to-white/60" : "form-gray-300 to-gray-500"}  flex justify-center font-bold items-center rounded-md italic hover:scale-90 p-5 w-32`}
        >
          See More <MdMoreHoriz />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
