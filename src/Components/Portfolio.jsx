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
import image from "../images/sleepy-logo.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "POCKET NOTES",
    description:
      "Pocket Notes is a responsive web application that enables users to create multiple note groups. Each group can contain numerous notes, each automatically timestamped upon creation. All notes are persistently stored in local storage for easy access and management.",
    url: "https://github.com/abhi7889/pocket-notes",
  },
  {
    title:
      "K-CARE (KISAN CARE) | ML-based Flutter App for Smart Agriculture to Predict Crop Disease and NPK Ratio",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/abhi7889/super-app",
  },
  {
    title: "SUPER APP ",
    description:
      "Developed a comprehensive Super App using React, offering features like user registration, timer functionality, note-taking, real-time weather updates, news feeds, and dynamic movie recommendations based on selected genres, all fetched via APIs. The app is designed with user-friendly interfaces for accessing entertainment, creating and saving notes, and displaying real-time news updates.",
    url: "https://github.com/abhi7889/NPK-preciction",
  },
  {
    title: "TICKETLESS ENTRY SYSTEM TO MONUMENTS",
    description:
      "Developed a user-friendly digital ticket booking app using Flutter for museums/monuments. The app features a QR code ticket system for entry and offers visitors easy booking, status viewing, and cancellation options. Implemented a payment system using Stripe for secure and convenient transactions.",
    url: "https://github.com/abhi7889/Ticketless-entry-system-to-monuments",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "#36454f" }}>
      <h2 style={{ textAlign: "center", color: "whitesmoke" }}>Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          backgroundColor: "#36454f",
        }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "80%", width: "90%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
