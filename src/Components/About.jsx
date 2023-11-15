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
  "I am a Front End Developer who is passionate about creating intuitive and engaging user experiences. I believe in the power of a well-designed UI and strive to bridge the gap between graphical design and technical implementation.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
  },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
// const detailOrQuote =
//   "I am a Front End Developer who is passionate about creating intuitive and engaging user experiences. I believe in the power of a well-designed UI and strive to bridge the gap between graphical design and technical implementation.";

const About = () => {
  return (
    <section className="padding" id="about" style={{ backgroundColor: "#e5ece9" }}>
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div
        style={{
          backgroundColor: "#e5ece9",
          width: "90%",
          padding: "4rem",
          margin: "1rem auto",
          textAlign: "center",
          color: "#252627",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>

        <hr />
        <h2>Skills</h2>
        <ul
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "2rem",
            margin: "3rem 3rem",
            cursor: "pointer",
            padding: "0",
          }}
        >
          {skillsList.map((skill, index) => (
            <img
              key={index}
              src={skill.imageUrl}
              alt={skill.name}
              style={{
                transition: "transform 0.5s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
              onFocus={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onBlur={(e) => (e.currentTarget.style.transform = "")}
            />
          ))}
        </ul>
        <hr />
        {/* <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p> */}
      </div>
    </section>
  );
};

export default About;
