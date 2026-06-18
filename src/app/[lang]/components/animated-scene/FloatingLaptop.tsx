"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { SpringValue } from "@react-spring/core";
import { animated } from "@react-spring/three";

import vertexShader from "../game-of-life/shaders/vertexShader.glsl";
import fragmentShader from "../game-of-life/shaders/fragmentShader.glsl";

type Props = {
  open: boolean;
  openDegreeRad: SpringValue<number>;
  initialTexture: THREE.Texture;
  shaderRef: RefObject<THREE.ShaderMaterial>;
};

const FloatingLaptop: React.FC<Props> = ({
  open,
  openDegreeRad,
  shaderRef,
  initialTexture,
}) => {
  const { nodes, materials } = useGLTF("/assets/mac.glb");

  // Update cursor on hover -----------------------
  const [isHoveredOnModel, setIsHoveredOnModel] = useState(false);
  useEffect(() => {
    document.body.style.cursor = isHoveredOnModel ? "pointer" : "auto";
  }, [isHoveredOnModel]);

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsHoveredOnModel(true);
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsHoveredOnModel(false);
  };

  // Floating animation ---------------------------
  const modelGroupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!modelGroupRef.current) return;

    const elapsedTime = state.clock.getElapsedTime();

    const {
      x: currentRotationX,
      y: currentRotationY,
      z: currentRotationZ,
    } = modelGroupRef.current.rotation;
    const { y: currentPositionY } = modelGroupRef.current.position;

    const nextRotationX = open ? 0 : Math.cos(elapsedTime / 10) / 10 + 0.25;
    const nextRotationY = open ? 0 : Math.sin(elapsedTime / 10) / 4;
    const nextRotationZ = open ? 0 : Math.sin(elapsedTime / 10) / 10;
    const nextPositionY = open ? -4.3 : (-2 + Math.sin(elapsedTime)) / 3;

    const smoothNextRotationX = THREE.MathUtils.lerp(
      currentRotationX,
      nextRotationX,
      0.1,
    );
    const smoothNextRotationY = THREE.MathUtils.lerp(
      currentRotationY,
      nextRotationY,
      0.1,
    );
    const smoothNextRotationZ = THREE.MathUtils.lerp(
      currentRotationZ,
      nextRotationZ,
      0.1,
    );
    const smoothNextPositionY = THREE.MathUtils.lerp(
      currentPositionY,
      nextPositionY,
      0.1,
    );

    modelGroupRef.current.rotation.x = smoothNextRotationX;
    modelGroupRef.current.rotation.y = smoothNextRotationY;
    modelGroupRef.current.rotation.z = smoothNextRotationZ;
    modelGroupRef.current.position.y = smoothNextPositionY;
  });

  // Set up initial rotation
  useEffect(() => {
    if (!modelGroupRef.current) return;

    // modelGroupRef.current.rotation.x = 0.05;
    // modelGroupRef.current.rotation.y = -0.05;
    // group.current.rotation.z = Math.PI / 2;
  }, []);

  // Apply on-screen material to the laptop
  const uniforms = useMemo(
    () => ({
      u_colorA: { value: new THREE.Color("#1E1E1E") }, // Color for dead cells (on-screen texture)
      u_colorB: { value: new THREE.Color("#FFEE9B") }, // Color for alive cells (on-screen texture)
      u_texture: { value: initialTexture }, // Initial texture to render, will be changed in rendering loop using shader
    }),
    [initialTexture],
  );

  return (
    <group
      ref={modelGroupRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      // dispose={null}
    >
      {/* Top part */}
      <animated.group rotation-x={openDegreeRad} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={(nodes["Cube008"] as THREE.Mesh).geometry}
          ></mesh>
          <mesh
            material={materials["matte.001"]}
            geometry={(nodes["Cube008_1"] as THREE.Mesh).geometry}
          />
          <mesh
            // material={materials["screen.001"]}
            geometry={(nodes["Cube008_2"] as THREE.Mesh).geometry}
          >
            <shaderMaterial
              ref={shaderRef}
              fragmentShader={fragmentShader}
              vertexShader={vertexShader}
              uniforms={uniforms}
            />
          </mesh>
        </group>
      </animated.group>
      {/* Keyboard */}
      <mesh
        material={materials.keys}
        geometry={(nodes.keyboard as THREE.Mesh).geometry}
        position={[1.79, 0, 3.45]}
      />
      {/* Bottom part */}
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={(nodes["Cube002"] as THREE.Mesh).geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={(nodes["Cube002_1"] as THREE.Mesh).geometry}
        />
      </group>
      {/* Touchbar */}
      <mesh
        material={materials.touchbar}
        geometry={(nodes.touchbar as THREE.Mesh).geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

export default FloatingLaptop;
