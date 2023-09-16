import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
const fixedNavbar = ()=>{
 if (window.scrollY >= 750){
  setNavbar(true);

 }else{
   setNavbar(false);
 }
}
window.addEventListener("scroll", fixedNavbar)











  return (
    <div className="header" >
      <ParticlesBg type="circle" bg={true} />
      <Navbar  className=  {navbar ? 'navbar active' : 'navbar'} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav activeKey="/#Header  ">
          <Nav.Item>
            <Link to="header" spy={true} smooth={true} offset={100} duration={0}>HOME</Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="about" spy={true} smooth={true} offset={100} duration={0}>ABOUT</Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="resume" spy={true} smooth={true} offset={100} duration={0}>RESUME</Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="works" spy={true} smooth={true} offset={100} duration={0}>WORK</Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="contact" spy={true} smooth={true} offset={100} duration={0}>CONTACT</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container  >
        <div className="banner-text">
          <h1>Nordic-Giant Project</h1>
          <h3>
            I am a web development engineer and I use react and vue.js to
            develop pages. This project is a resume template that can be used as
            the project home page or resume page.
          </h3>
          <hr />
          <ul className="social">
            <a className="button  project-btn" href="/">
              <BookTwoToneIcon /> Project
            </a>
            <a className="button  github-btn" href="/">
              {" "}
              <GitHubIcon /> Github
            </a>
          </ul>
          <div className="scroll-down">
            <span className="text">Scroll down</span>
            <Link to="about">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
