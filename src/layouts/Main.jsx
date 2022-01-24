import { useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Profile from "../components/Profile";

const Main = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const cursorWidth = 8;
  const followerWidth = 48;

  const tl = gsap.timeline();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    });
  }, []);

  useEffect(() => {
    tl.to(cursorRef.current, {
      duration: 0.5,
      left: mouseX - cursorWidth / 2,
      top: mouseY - cursorWidth / 2,
    }).to(
      followerRef.current,
      {
        left: mouseX - followerWidth / 2,
        top: mouseY - followerWidth / 2,
      },
      ">-=0.4"
    );
  }, [mouseX, mouseY, tl]);

  return (
    <div
      className={`w-screen max-w-screen overflow-hidden md:overflow-auto md:w-full`}
    >
      <div
        ref={cursorRef}
        className={`absolute rounded-full top-0 left-0 pointer-events-none w-2 h-2 z-30 bg-[#994ff3]`}
      ></div>
      <div
        ref={followerRef}
        className={`absolute rounded-full top-0 left-0 pointer-events-none w-12 h-12 z-30 border-2 border-[#994ff3]`}
      ></div>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
