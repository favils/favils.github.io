// Cursor.js
"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import "../globals.css";

const Cursor = () => {

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursorDot');

    const updateCursor = (e) => {
      gsap.to('.cursor', { 
        duration: 1, 
        x: e.pageX * 2 + 13 + "%", 
        y: e.pageY * 2 + 13 + "%", 
        ease: "power3.out" ,
      });
      cursorDot.style.top = e.pageY + 'px';
      cursorDot.style.left = e.pageX + 'px';
    }

    window.addEventListener('mousemove', updateCursor);

  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursorDot"></div>
    </>
  );
};

export default Cursor;
