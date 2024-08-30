import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  padding: 100px 50px;
  background: #1e1e1e;
  color: white;
  min-height: 100vh;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);


  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    color: #23a6d5;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Portfolio = () => {
  const projects = [
    {
      title: 'Online Shopping Site',
      description: 'A full-featured online shopping site with a responsive design.',
      link: '#'
    },
    {
      title: 'Diary App',
      description: 'A diary application built with Java and Spring Boot.',
      link: '#'
    },
    // Add more projects here
  ];

  return (
    <PortfolioContainer>
      <h2>My Projects</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
