import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Project from "../Project";

function Portfolio() {
  const [pages] = useState([
    {
      name: "portfolio",
    },
  ]);
  const [currentPage] = useState(pages[0]);
  const [projects] = useState([
    {
      name: "git-that-money",
      description: "MySQL/Express/Handlebars",
      link: "https://sleepy-eyrie-10581.herokuapp.com",
      repo: "https://github.com/N2theFray/git-that-money",
    },
    {
      name: "DateNite",
      description: "JQuery/API/Materialize",
      link: "https://justpuzey.github.io/DateNite/",
      repo: "https://github.com/justpuzey/DateNite",
    },
    {
      name: "run-buddy",
      description: "HTML/CSS",
      link: "https://singfieldotis.github.io/run-buddy",
      repo: "https://github.com/singfieldotis/run-buddy",
    },
    {
      name: "tech-blog",
      description: "Node/MySQL/Sequalize",
      link: "https://singfieldotis.github.io/just-tech-news/",
      repo: "https://github.com/singfieldotis/just-tech-news",
    },
    {
      name: "weather-dashboard",
      description: "JavaScript/API/Bootstrap",
      link: "https://singfieldotis.github.io/weather-dashboard/",
      repo: "https://github.com/singfieldotis/weather-dashboard",
    },
    {
      name: "food-festival",
      description: "JS/Node/PWA",
      link: "https://singfieldotis.github.io/food-festival/",
      repo: "https://github.com/singfieldotis/food-festival",
    },
    {
      name: "password-generator",
      description: "HTML/CSS/JavaScript",
      link: "https://singfieldotis.github.io/password-generator/",
      repo: "https://github.com/singfieldotis/password-generator",
    },
  ]);

  return (
    <section className="p-0">
      <div className="container-fluid p-0">
        <h1 className="text-center margin-top">
          {capitalizeFirstLetter(currentPage.name)}
        </h1>
        <hr className="my-4" />
        <div className="row no-gutters popup-gallery">
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
