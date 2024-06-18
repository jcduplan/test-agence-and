"use strict";

import Lenis from "lenis";
import { gsap, ScrollTrigger } from "gsap/all";
import { tns } from "tiny-slider";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    smoothWheel: true,
    duration: 1.2,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const preloaderTl = gsap.timeline({
    defaults: { ease: "ease-out-quart", duration: 1.5, delay: 0.5 },
  });

  preloaderTl
    .to("#js-loader-image", { y: 0, autoAlpha: 1, duration: 0.8 })
    .to("#js-wrapper-loader", {
      autoAlpha: 0,
      delay: 0.5,
      duration: 0.4,
      ease: "custom",
    });

  const sectionPin = document.querySelector(".js-custom-scrolltrigger-gsap");
  if (window.matchMedia("(min-width: 1025px)").matches) {
    gsap.to(sectionPin, {
      scrollTrigger: {
        trigger: sectionPin,
        start: "top top",
        end: () => "+=" + sectionPin.offsetWidth * 1.5,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      xPercent: -100,
      ease: "none",
    });
  }

  const menu = document.getElementById("menu-wrapper");
  const body = document.body;

  window.onclick = (event) => {
    if (!event.target.matches("#menu-wrapper")) {
      if (menu.classList.contains("open")) {
        menu.parentElement.parentElement.classList.remove("open-menu");
        menu.classList.remove("open");
        body.classList.remove("js-open-menu");
      }
    }
  };

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.parentElement.parentElement.classList.toggle("open-menu");
    menu.classList.toggle("open");
    body.classList.toggle("js-open-menu");
  });

  const elementsFade = new Set([...document.querySelectorAll("[fade]")]);
  const observerOptionsFade = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  function observerCallbackFade(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
      }
    });
  }

  const observerFade = new IntersectionObserver(
    observerCallbackFade,
    observerOptionsFade
  );
  elementsFade.forEach((el) => observerFade.observe(el));

  const elementsTranslateY = new Set([
    ...document.querySelectorAll("[fade-translate-y]"),
  ]);
  const observerOptionsTranslateY = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observerTranslateY = new IntersectionObserver(function (
    entries,
    observer
  ) {
    var delay = 0;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          // add the class that triggers the animation
          entry.target.classList.add("loaded");
        }, delay);

        // increase the delay to allow a cascading effect for the elements
        delay += 400; // in milliseconds

        // stop listening for this element
        observer.unobserve(entry.target);
      }
    }, observerOptionsTranslateY);
  });
  elementsTranslateY.forEach((el) => observerTranslateY.observe(el));

  const elementsContrast = new Set([
    ...document.querySelectorAll("[contrast]"),
  ]);
  const observerOptionsContrast = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  function observerCallbackContrast(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menu.classList.add("contrasted");
      } else {
        menu.classList.remove("contrasted");
      }
    });
  }

  const observerContrast = new IntersectionObserver(
    observerCallbackContrast,
    observerOptionsContrast
  );
  elementsContrast.forEach((el) => observerContrast.observe(el));

  var sliderAgenda = tns({
    container: ".js-slider",
    items: 1,
    controls: true,
    navPosition: "bottom",
    speed: 1500,
    mouseDrag: true,
    arrowKeys: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
  });

  // store tabs variable
  var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll(".tab-pane");
    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  for (var i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks);
  }
});
