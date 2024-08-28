import React, { useRef } from "react";
import { Canvas, useThree, useFrame} from "@react-three/fiber";
import "./style.css";
import { Wireframe,  Stars ,OrbitControls, Text } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const FloatingText = () => {
  const ref = useRef();
  const { viewport } = useThree();
  const speed = 0.02; // Adjust the speed as needed

  useFrame((state, delta) => {
    ref.current.position.x -= speed * delta;

    // Ensure the text stays within the viewport
    if (ref.current.position.x < -viewport.width / 2) {
      ref.current.position.x = viewport.width / 2;
    }
  });

  return (
   
    <Text
      ref={ref}
      position={[-2, -3, -5]} // Initial position
      fontSize={2}
      color="red"
      anchorX="center"
      anchorY="middle"
    >
      Yo , Learning ThreeJS
    </Text>
  );
}

const App = () => {
  return (
    <>
    <Canvas>
<Stars/>

      <OrbitControls/>
      <ambientLight />
      <Cyl/>

      
      
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
      </EffectComposer>

      <FloatingText/>
    </Canvas>
    
    <div></div>
</>
    );
};

export default App;