import React from 'react';
import styled, { keyframes } from 'styled-components';
import Game from '../components/Game';

// Gradient animation for the background
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Container for the entire Home page
const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  animation: ${gradient} 15s ease infinite;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

// Overlay for blurring the background behind content
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(5px);
  z-index: -1;
`;

// Styled title
const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  text-align: center;
  animation: fadeIn 2s ease-out;
`;

// Keyframes for fading in the title and quote
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled quote text
const Quote = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  padding: 0 20px;
  text-align: center;
  animation: ${fadeIn} 2s ease-out;
  max-width: 80%;
`;

// Styled button for interaction
const Button = styled.button`
  margin-top: 20px;
  margin-bottom:5px;
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
`;

// Home component structure
const Home = () => {
  return (
    <HomeContainer>
      <Overlay />
      <Title>Welcome to the SAROJ SEENUAN WEBSITE</Title>
      <Quote>"明日が怖くて何が悪いの？" - Cyclonista</Quote>
      <Button onClick={() => alert('クリックしたよね！君！！')}>Get Started</Button>
      <Game />
    </HomeContainer>
  );
};

export default Home;
