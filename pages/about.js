import React from "react";
import { centeredPageStyles } from "../styles";
import pulp from "../public/static/images/pulp.jpeg";

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
      <h1>¿Quien soy?</h1>
      <img src={pulp} className="img-centered" alt="Samuel L. Jackson" />
      <p>
        My money's in that office, right? If she start giving 
        me some bullshit about it ain't there, and we got to 
        go someplace else and get it
      </p>
    </div>
  );
};

export default About;
