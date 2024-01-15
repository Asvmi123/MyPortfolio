import React from "react";
import About from "/src/components/portfol/About";
import Skill from "/src/components/portfol/Skill";
import Footer from "/src/components/portfol/footer";
import Box from "/src/components/portfol/Screenshot (7).png";
import PNG from "/src/components/portfol/preview.png";
import Png1 from "/src/components/portfol/Screenshot (5).png";

// import "./App.css";

import zurag from "/src/components/me.jpg";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import Project from "./ProjectSection";
import ProjectSection from "./ProjectSection";

const Portfolio = () => {
  return (
    <div>
      <a href="#" className="back">
        back
      </a>
      <header className="header">
        <div className="card-inner">
          <a href="#" className="logo" card-inner>
            ASVMI MAMEKO
          </a>
        </div>
        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#About">About</a>
          <a href="#Skill">Skill</a>
          <a href="#Contact">Contact</a>
          <a href="#Footer">Footer</a>
        </nav>
      </header>
      <div className="home">
        <div class="home-image">
          <img src={zurag} alt="" />
        </div>
        <div className="home-content">
          <h1>Hi, I'm Enkhee</h1>
          <p>
            My name is Enkhtvwshin. I'm eighteen years old. I was born in
            Erdenet as the middle girl of a family. Studied at EBS from 2011 to
            2023. Currently, Indra is studying in a cyber school.
          </p>

          <div className="home-sci">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaFacebookMessenger />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <RiLinkedinFill />
            </a>
          </div>

          <div>
            <a href="#" className="btn">
              download
            </a>
          </div>
        </div>
      </div>
      <div id="About" style={{ height: "100vh", background: "#a78bfa" }}>
        <Skill />
      </div>
      <div id="Skill" style={{ height: "100vh", background: "#a78bfa" }}>
        <h1
          style={{
            fontSize: "40px",
            color: "#fff",
            textAlign: "center",
            letterSpacing: "5px",
            textShadow: "1px 6px #444",
            padding: "60px 0",
          }}
        >
          Project
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img src={Box} style={{ height: "300px" }} alt="" />
          <img src={PNG} style={{ height: "300px" }} alt="" />
          <img src={Png1} style={{ height: "300px" }} alt="" />
        </div>
      </div>

      <div id="Footer" style={{ background: "#a78bfa" }}>
        <h1
          style={{
            fontSize: "40px",
            color: "#fff",
            textAlign: "center",
            letterSpacing: "5px",
            textShadow: "1px 6px #444",
          }}
        >
          Contact
        </h1>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
