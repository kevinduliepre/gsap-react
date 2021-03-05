import React, { useEffect, useState } from "react";

import { Route } from "react-router-dom";

import "./styles/App.scss";
import gsap from "gsap";

// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";

// Pages
import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import About from "./pages/about";
import Approach from "./pages/approach";
import Services from "./pages/services";

const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    Component: CaseStudies,
  },
  {
    path: "/approach",
    name: "Approach",
    Component: Approach,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
  },
  {
    path: "/about-us",
    name: "About Us",
    Component: About,
  },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  // Preventing flass from happening
  gsap.to("body", { duration: 0, css: { visibility: "visible" } });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    // Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedListener = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedListener);

    return () => {
      window.removeEventListener("resize", debouncedListener);
    };
  });

  return (
    <>
      {console.log(dimensions)}
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
};

export default App;
