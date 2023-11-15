/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image2 from "../images/pocket.png";
import image3 from "../images/superapp.jpg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "POCKET NOTES",
    imageUrl: image2,
    url: "https://github.com/abhi7889/pocket-notes",
    demo: "https://github.com/abhi7889",
    description: "This is a description of the POCKET NOTES project.",
  },
  {
    title: "K-CARE",
    imageUrl: image3,
    url: "https://github.com/abhi7889/super-app",
    demo: "https://github.com/abhi7889",
    description: "This is a description of the POCKET NOTES project.",
  },
  {
    title: "SUPER APP ",
    imageUrl: image3,
    url: "https://github.com/abhi7889/NPK-preciction",
    demo: "https://github.com/abhi7889",
    description: "This is a description of the POCKET NOTES project.",
  },
  {
    title: "TICKETLESS ENTRY SYSTEM",
    imageUrl: image3,
    url: "https://github.com/abhi7889/Ticketless-entry-system-to-monuments",
    demo: "https://github.com/abhi7889",
    description: "This is a description of the POCKET NOTES project.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "#E8F1F2" }}>
      <h2 style={{ textAlign: "center", color: "#252627" }}>Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          backgroundColor: "#E8F1F2",
        }}
      >
        <div className="container">
          {projectList.map((project, index) => (
            <div className="box" key={index}>
              <img
                style={{ width: "300px", borderRadius: "10px" }}
                src={project.imageUrl}
                alt={project.title}
              />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="links">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="h"
                    style={{ width: "40px", height: "40px" }}
                  />

                  <h3 style={{ letterSpacing: "12px", fontWeight: "900", cursor: "pointer" }}>
                    CODE
                  </h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/ios-filled/50/circled-up-2.png"
                      alt="h"
                      style={{ width: "40px", height: "40px", transform: "rotate(45deg)" }}
                    />
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
