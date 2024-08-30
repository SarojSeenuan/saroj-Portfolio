import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUser, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  
  a {
    color: white;
    margin-left: 2rem;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    
    &:hover {
      color: #f0a500;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        Saroj Seenuan
      </NavLeft>
      <NavRight>
        <Link to="/"><FaHome />Home</Link>
        <Link to="/about"><FaUser />About</Link>
        <Link to="/portfolio"><FaBriefcase />Portfolio</Link>
        <Link to="/blog"><FaBlog />Blog</Link>
        <Link to="/contact"><FaEnvelope />Contact</Link>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
