import React, { useEffect, useState } from "react";

import gsap from "gsap";

import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";

const homeAnimation = (completeAnimation) => {
  const tl = gsap.timeline();

  tl.from(".line span", {
    duration: 1,
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", {
      duration: 1.6,
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", {
      duration: 1.6,
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", {
      duration: 0,
      css: {
        display: "none",
      },
    })
    .from(".case-image img", {
      duration: 1.6,
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    // On load timeline
    homeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}

      <Banner />
      <Cases />
    </>
  );
};

export default Home;
