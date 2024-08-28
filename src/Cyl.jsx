import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as Three from "three";
import { useFrame } from "@react-three/fiber";

const Cyl = () => {
  let tex = useTexture("./src/image.png");
  let ryl = useRef(null);
  useFrame((state, delta) => {
    ryl.current.rotation.y -= delta;
  });
  return (
    <group rotation={[0, -0.1, 0.2]}>
      <mesh ref={ryl} position={[0,1.5,0]}>
        <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
        <meshStandardMaterial map={tex} transparent side={Three.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
