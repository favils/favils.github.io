"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

export default function Home() {
  
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop", 
      "M0,0 C0.2,0.012 0.329,0.053 0.487,0.201 0.679,0.381 0.465,1 1,1"
    );

    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text.split("").map(function (char) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        }).join("");
        element.innerHTML = splitText;
      });
    }
    splitTextIntoSpans(".header h1");

    function animateCounter() {
      const counterElement = document.querySelector(".counter p");
      let currentValue = 0;
      let updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      function updateCounter() {
        const elapsedTime = Date.now() - startTime;
        
        if(elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          );
          counterElement.textContent = currentValue;
          setTimeout(updateCounter, updateInterval);
        } else {
          counterElement.textContent = currentValue;
          setTimeout(() => {
            gsap.to(counterElement, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: () => {
                revealLandingPage();
              },
            })
          }, -500); 
        }
      }

      updateCounter();
    }

    gsap.to(".counter p", {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });

    function revealLandingPage() {
      gsap.to(".hero", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        onStart: () => {
          gsap.to(".hero", {
            transform: "translate(-50%, -50%) scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(".overlay", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 2,
            delay: 0.5,
            ease: "hop",
          });

          gsap.to(".hero-img img", {
            transform: "scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(".header h1 span", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.75,
          })
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="counter"><p>0</p></div>

      <section className="hero">
        <div className="overlay"></div>

        <nav>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">fatima</a>
            </div>
            <div className="nav-items">
              <p>software engineer</p>
            </div>
          </div>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">work</a>
              <a href="#">studio</a>
              <a href="#">contact</a>
            </div>
            <div className="nav-items">
              <a href="https://github.com/favils">github</a>
              <a href="https://www.linkedin.com/in/fatimavillena/">linkedin</a>
            </div>
            <div className="nav-items">
              <p>miami, fl</p>
            </div>
          </div>
        </nav>

        <div className="header">
          <h1>fatima</h1>
        </div>

        <div className="hero-img">
          <img src="bg.png"/>
        </div>
      </section>
    </div>
  );
}
