import React, { useEffect } from "react";
import Section1 from "../components/section1"
import Section2 from "../components/section2"
import Section3 from "../components/section3"


export default function Home() {
  let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) }

  const loop = () => {
    const elementsToShow = document.querySelectorAll('.show-on-scroll');
    const elementsToAnimateOnce = document.querySelectorAll('.animate');
    elementsToShow.forEach(function (element) {
      if (isElementInViewPort(element)) {
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })

    elementsToAnimateOnce.forEach(function (element) {
      if (isElementInViewPort(element)) {
        element.classList.add('animate-once')
      }
    })
    scroll(loop);
  }

  const isElementInViewPort = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
  }

  useEffect(() => {
    loop()
  }, []);


  return (
    <div>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  );
}
