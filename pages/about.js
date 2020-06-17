import React from "react";
import { centeredPageStyles } from "../styles";
import { NextSeo } from "next-seo";
import waja from "../public/static/images/waja.jpg";
import web from "../public/static/images/web-tech.svg";
import rec from "../public/static/images/react.svg";
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
  title: "About Wajari Velásquez | React development | Wajari.Dev",
  tags: ["Next.js"],
  layout: "page",
  publishDate: "2020-04-11",
  modifiedDate: false,
  seoDescription: "Wajari Velásquez professional profile in web development",
};

const About = () => {
  return (
    <div className="centered-container">
      <NextSeo
        title="About Wajari Velásquez | React development | Wajari.Dev"
        description="Wajari Velásquez professional profile in web development"
        canonical="https://wajari.dev/about"
      />
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
          <b>Current job:</b>
          <ul>
            <li>
              Freelance in Search Engine Optimization (SEO), digital analytics,
              email marketing
            </li>
            <li>
              SEO workshops at the University of Vigo (2017-2020) / Training for
              teachers of the Xunta de Galicia, (2017-2019)
            </li>
          </ul>
        </li>
        <li>
          <b>English:</b> University. Reading and speaking: advanced · Writing:
          medium
        </li>
        <li>
          <b>Galician:</b> Basic level
        </li>
        <br></br>
        <img src={web} className="img-centered" alt="Web Technologies" />
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
        <div className="espaciado-1">
          <div>
            <FaHtml5 />
          </div>
          <div>
            <FaLinux />
          </div>
          <div>
            <FaWordpress />
          </div>
          <div>
            <FaCss3Alt />
          </div>
        </div>
      </IconContext.Provider>
      <ul>
        <li>5 years of experiencie with HTML and CSS</li>
        <li>Linux and Ubuntu fan</li>
        <li>5 years working with WordPress</li>
        <li>SEO, data analysis with Search Console and Google Analytics</li>
      </ul>
      <br></br>
      <img src={rec} className="img-centered" alt="React" />
      <br></br>
      <h2>Learning technologies</h2>
      <IconContext.Provider value={{ size: "5em" }}>
        <div className="espaciado">
          <div>
            <FaGitAlt />
          </div>
          <div>
            <FaNode />
          </div>
          <div>
            <FaReact />
          </div>
        </div>
      </IconContext.Provider>
      <ul>
        <li>Less than a year learning Git, Node.JS, React</li>
        <li>Some experience with SQL databases especially with postgres</li>
        <li>
          Practicing with the <b>Next.JS</b> framework with this blog
        </li>
        <li>
          Studying <b>JavaScript</b> every day
        </li>
      </ul>
      <h2>Links</h2>
      <IconContext.Provider value={{ color: "#212121", size: "2em" }}>
        <div className="espaciado">
          <div>
            <a href="https://twitter.com/wajariv/">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href="https://github.com/wajari">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/wajari/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default About;
