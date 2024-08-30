import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 100px 50px;
  background: #2e2e2e; 
  color: white; 
  min-height: 100vh;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;

const Post = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    color: #f0a500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <h2>Blog</h2>
      <p>Read my latest articles and insights on web development and technology:</p>

      <Posts>
        <Post>
          <h3>Understanding React Hooks</h3>
          <p>A deep dive into React Hooks and how they can be used to simplify state management and side effects in your React applications.</p>
          <a href="#">Read More</a>
        </Post>

        <Post>
          <h3>Getting Started with Three.js</h3>
          <p>An introduction to Three.js, a JavaScript library for creating 3D graphics in the browser. Learn the basics of setting up a scene and rendering objects.</p>
          <a href="#">Read More</a>
        </Post>

        <Post>
          <h3>CSS Grid vs. Flexbox</h3>
          <p>Comparing CSS Grid and Flexbox: when to use each layout technique and how to leverage their unique features to build responsive designs.</p>
          <a href="#">Read More</a>
        </Post>

        {}
      </Posts>
    </BlogContainer>
  );
};

export default Blog;
