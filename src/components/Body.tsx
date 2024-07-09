import React from "react";
import { Container, Icon } from "semantic-ui-react";
import "./Body.css";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about"); // Navigate to the "/about" route
  };

  return (
    <Container className="body-container">
      <span className="body-span">I'M ETHAN JORDON </span>
      <br />
      <p>
        Your friendly neighborhood frontend developer. Since starting my journey
        as a bootcamp teacher/assistant two years ago, I've accumulated valuable
        experience in remote work for agencies, consulting for startups, and
        collaborating with talented teams to craft impactful digital products.
      </p>
      <p>
        I approach challenges with quiet confidence, maintain a natural
        curiosity, and am always refining my skills.
      </p>
      <p>
        Bona fide photochromic LENS enthusiast - sunlight or indoors, I've got
        it covered. I tread the path of minimalism, finding beauty in simplicity
        and order. When I'm not crafting beautiful web experiences, you can find
        me reading ARTICLES or swaying to the rhythm of Pop Music & Jazz, losing
        myself in the captivating flow of melodies. anyways you can CONTACT ME
      </p>
      <p>
        <a href="#about-me">See More About Me</a>{" "}
        <Icon
          name="long arrow alternate right"
          className="animated-icon"
          onClick={handleNavigate}
        />
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/esj1/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <Icon name="linkedin" className="footer-icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/rejordon93"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <Icon name="github" className="footer-icon" />
          GitHub
        </a>
      </div>
    </Container>
  );
};
