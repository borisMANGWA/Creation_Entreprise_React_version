import { Outlet, useLocation } from "react-router";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const {pathname} = useLocation()

  // # Fonction de changement de theme
  const element = document.documentElement;

  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      element.classList.remove("light");
    element.setAttribute("data-theme", theme);
    } else {
      element.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    element.setAttribute("data-theme", theme);
    }
    console.log("Theme:", theme, "Element.classList:", element.classList);
  }, [theme]);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
        <Outlet context={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default App;
