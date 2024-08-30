import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';

const GameWrapper = styled.div`
  width: 600px;  
  height: 400px; 
  border: 1px solid #ddd; 
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 0 auto; 
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #ff9933;  
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: #ff7700;  
  }
`;

const Game = () => {
  const mountRef = useRef(null);
  const [shape, setShape] = useState('cube');

  useEffect(() => {
    let scene, camera, renderer, controls;
    let object; 
    let speed = 0.03;

    // Initialize Scene
    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(600, 400);
      mountRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); 
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
    };

    // Create and Add Object
    const createObject = (shape) => {
      if (object) {
        scene.remove(object); // Remove the old object
      }

      let geometry;
      switch (shape) {
        case 'sphere':
          geometry = new THREE.SphereGeometry();
          break;
        case 'pyramid':
          geometry = new THREE.ConeGeometry(1, 1, 4);
          break;
        default:
          geometry = new THREE.BoxGeometry();
      }

      const material = new THREE.MeshStandardMaterial({ color: 0xffee00 });  
      object = new THREE.Mesh(geometry, material);
      scene.add(object);
    };

    // Update Object on Click
    const handleObjectClick = () => {
      object.material.color.set(Math.random() * 0xffffff);
      speed = (Math.random() - 0.5) * 0.1; 
    };

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      object.rotation.x += speed;
      object.rotation.y += speed;
      controls.update();
      renderer.render(scene, camera);
    };

    // Initialize everything
    initScene();
    createObject(shape);
    animate();
    window.addEventListener('click', handleObjectClick);

    // Cleanup
    return () => {
      window.removeEventListener('click', handleObjectClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [shape]);

  return (
    <GameWrapper ref={mountRef}>
      <Button onClick={() => setShape(shape === 'cube' ? 'sphere' : shape === 'sphere' ? 'pyramid' : 'cube')}>
        シェイプ変更
      </Button>
      {/* Three.js canvas will be mounted here */}
    </GameWrapper>
  );
};

export default Game;
