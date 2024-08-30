import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 100px 50px;
  background: #2e2e2e;
  color: white;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  input, textarea {
    margin-bottom: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #23a6d5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background-color: #23d5ab;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <Form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
