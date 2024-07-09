import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <Menu inverted pointing secondary>
      <Menu.Item>
        <Link to="/" className="nav-link">
          <Icon name="react" className="spin-animation" />
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/projects" className="nav-link">
            <Icon className="folderOpen" name="folder open" /> Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog" className="nav-link">
            <Icon className="blog" name="blogger" /> Blog
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact" className="nav-link">
            <Icon className="envelopeIcon" name="envelope outline" /> Contact
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
