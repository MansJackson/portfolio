// eslint-disable-next-line
import React from 'react';
import '../styles/Contact.css';

const Contact: React.FunctionComponent = (): JSX.Element => (
  <>
    <div className="contact">
      <div className="contact_links" id="contact">
        <a target="_blank" rel="noopener noreferrer" href="mailto: mans.jackson@gmail.com"><i className="fas fa-envelope-square" aria-label="email" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/MansJackson"><i className="fab fa-github-square" aria-label="GitHub" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/m%C3%A5nsjackson/"><i className="fab fa-linkedin" aria-label="LinkedIn" /></a>
      </div>
      <p>&copy; Måns Jackson 2020</p>
    </div>
    <span id="contact" />
  </>
);

export default Contact;
