import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei';
import CanvasLoader from '../components/Loader';
import * as THREE from 'three';

const CES = ({ isMobile }) => {
  const  logo  = useGLTF('../Logo/6.gltf');
  return (
    <mesh>
      <ambientLight intensity={0.0} /> {/* Soft overall lighting */}
      <hemisphereLight intensity={0.0} groundColor="black" />
      <directionalLight
        position={[-15, -10, 120]}
        intensity={6}
        castShadow
      />
      <pointLight intensity={1} position={[0, 10, 10]} />
      <spotLight
        position={[-15, -20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={logo.scene}
        scale={isMobile ? 0.2 : 0.57}// Adjust rotation to tilt downwards
        position={isMobile ? [-0.25, 0, -2.2] : [-0.5, 0.25, 0]}
      />
    </mesh>
  );
};

const CESCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
    frameloop='demand'
    camera={{ position: [12, 9, 0], fov: 25 }}
    shadows
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        autoRotate

      />
        <CES isMobile={isMobile} />
        <Environment preset="sunset" /> {/* Adds an environment map for realistic lighting */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CESCanvas;
