/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/mainbackground.jpg";

// const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Creative Front-End Developer transforming ideas into visually striking and intuitive web experiences. Expert in web technologies, committed to delivering top-tier user interfaces.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "React Js",
  "Javascript",
  "Flutter",
  "Firebase",
  "MySQL",
  "HTML/CSS",
  "Java",
  "C++",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a Front End Developer who is passionate about creating intuitive and engaging user experiences. I believe in the power of a well-designed UI and strive to bridge the gap between graphical design and technical implementation.";

const About = () => {
  return (
    <section className="padding" id="about" style={{ backgroundColor: "#282C35" }}>
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div
        style={{
          backgroundColor: "#282C35",
          width: "50%",
          padding: "4rem",
          margin: "1rem auto",
          textAlign: "center",
          color: "whitesmoke",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
