import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function About() {
  const [pages] = useState([
    {
      name: "about me",
    },
  ]);
  const [currentPage] = useState(pages[0]);

  return (
    <div className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
            <hr />
            <p className="text-faded mb-5">
              I am an experienced front end developer with detailed full stack
              knowledge. I have been a hobbyist since 2008 when it comes to
              programming and web development. I decided to actually get serious
              and make a career out of this in mid-2019. I have recently
              completed the Web Development Bootcamp cirriculum at the
              University of Central Florida in the Summer of 2021.
            </p>

            <p className="text-faded mb-5">
              I have strong organizational skills and excellent problem-solving
              abilities which allow me to effectively collaborate on
              cross-functional teams that would include designers, software
              developers, scrum masters, and project managers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
