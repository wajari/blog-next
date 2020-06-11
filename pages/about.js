import React from "react";
import { centeredPageStyles } from "../styles";
import waja from "../public/static/images/waja.jpg";
import { IconContext } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const meta = {
  title: "Quien soy?",
  tags: ["Next.js"],
  layout: "page",
  publishDate: "2020-04-11",
  modifiedDate: false,
  seoDescription: "Esta es mi página de ejemplo de Samuel L. Jackson",
};

const About = () => {
  return (
    <div className="centered-container">
      <style jsx>{centeredPageStyles}</style>
      <h1>Wajari Velásquez</h1>
      <p>Padawan FullStack JavaScript | React | SEO Consultant</p>
      <img src={waja} className="img-centered" alt="Wajari" />
      <h2>Personal data / languages / studies</h2>
      <ul>
        <li>
          <b>City:</b> Pontevedra, Spain
        </li>
        <li>
          <b>Current job:</b> Freelance in Search Engine Optimization (SEO),
          digital analytics, email marketing
        </li>
        <p>
          SEO workshops at the University of Vigo (2017-2020) / Training for
          teachers of the Xunta de Galicia, (2017-2019)
        </p>
        <li>
          <b>English:</b> University. Reading and speaking: advanced · Writing:
          medium
        </li>
        <li>
          <b>Galician:</b> Basic level
        </li>
        <br></br>
        <h3>Studies</h3>
        <li>
          Bootcamp FullStack in JavaScript (2019-2020). Hack-a-Boss (Vigo)
        </li>
        <li>
          Technical course in search engine optimization (2014). International
          Marketing Institute
        </li>
        <li>Technical SEO with Barry Adams (2018). Learn Inbound (Dublin)</li>
      </ul>
      <br></br>
      <h2>Technologies</h2>
      <IconContext.Provider value={{ size: "5em" }}>
        <div>
          <FaHtml5 />
          <FaLinux />
          <FaWordpress />
          <FaCss3Alt />
        </div>
      </IconContext.Provider>
      <ul>
        <li>5 years of experiencie with HTML and CSS</li>
        <li>Linux and Ubuntu fan</li>
        <li>5 years working with WordPress</li>
        <li>SEO, data analysis with Search Console and Google Analytics</li>
      </ul>
      <br></br>
      <h2>Learning technologies</h2>
      <IconContext.Provider value={{ size: "5em" }}>
        <div>
          <FaGitAlt />
          <FaNode />
          <FaReact />
        </div>
      </IconContext.Provider>
      <ul>
        <li>Less than a year learning Git, Node.JS, React</li>
        <li>Some experience with SQL databases especially with postgres</li>
        <li>Practicing with the Next.JS framework with this blog</li>
        <li>
          Studying <b>JavaScript</b> every day
        </li>
      </ul>
      <h2>Links, blogs and other</h2>
      <IconContext.Provider value={{ color: "#212121", size: "2em" }}>
        <div className="espaciado">
          <a href="https://twitter.com/wajariv/">
            <FaTwitter />
          </a>
          <a href="https://github.com/wajari">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/wajari/">
            <FaLinkedinIn />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default About;
