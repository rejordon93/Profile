import React from "react";
import {
  Header,
  Form,
  FormField,
  Icon,
  Button,
  Container,
} from "semantic-ui-react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/"); // Navigate to the "/about" route
  };
  return (
    <Container className="contact-container">
      <Header as="h1" className="contact-headers">
        Contact
      </Header>
      <p className="contact-description">
        Get in touch or shoot me an email directly on{" "}
        <a href="mailto:rejordon17@gmail.com">rejordon17@gmail.com</a>
      </p>
      <Form className="contact-form">
        <FormField>
          <label>First Name</label>
          <input placeholder="First Name" />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </FormField>
        <Button type="submit" primary>
          Send Message
        </Button>
      </Form>
      <p>
        <a href="#" onClick={handleNavigate}>
          Go Back Home
        </a>
        <Icon
          name="long arrow alternate right"
          className="animated-icon"
          onClick={handleNavigate}
        />
      </p>
    </Container>
  );
};
