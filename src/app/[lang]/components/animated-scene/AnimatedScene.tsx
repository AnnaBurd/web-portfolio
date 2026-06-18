"use client";
import * as THREE from "three";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/three";

import FloatingLaptop from "./FloatingLaptop";
import GameOfLife from "../game-of-life/GameOfLife";

const openDegreeLaptop = (degreeRad: number) => -degreeRad + Math.PI / 2;

const AnimatedScene = () => {
  const [openLaptop, setOpenLaptop] = useState(false);

  const handleOpenToggle = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    let timer: null | ReturnType<typeof setTimeout>;

    setOpenLaptop((prev) => {
      // Start the game after opening the laptop

      if (!prev) {
        timer = setTimeout(() => {
          gameAnimationState !== "running" && setGameAnimationState("running");
        }, 1500);
      } else {
        timer && clearTimeout(timer);
        setGameAnimationState("paused");
      }

      return !prev;
    });
  };

  // Smoothly change the color of the point light and the open degree of the laptop
  const { pointLightColor, openDegreeRad } = useSpring({
    pointLightColor: !openLaptop ? "#d25578" : "#f0f0f0",
    openDegreeRad: openLaptop
      ? openDegreeLaptop(Math.PI / 2)
      : openDegreeLaptop(0),
  });

  // Helper for the point light
  const lightRef = useRef<THREE.PointLight>(null);
  useHelper(lightRef as any, THREE.PointLightHelper, 1);

  // Apply on-screen material to the laptop
  const [gameAnimationState, setGameAnimationState] = useState<
    "idle" | "running" | "paused"
  >("idle");

  const textureAssetPath = "/assets/texture.png";
  const initialTexture = useLoader(THREE.TextureLoader, textureAssetPath);
  initialTexture.flipY = false;

  const onScreenShaderMaterialRef = useRef<THREE.ShaderMaterial>(null);

  return (
    <>
      <GameOfLife
        animationState={gameAnimationState}
        initialTexture={initialTexture}
        shaderRef={onScreenShaderMaterialRef}
      />
      {/* <animated.pointLight
        ref={lightRef}
        position={[10, 10, 10]}
        intensity={1.5}
        // intensity={1000} // Uncomment to see the effect better
        color={pointLightColor}
      /> */}

      <Suspense
        fallback={
          <mesh>
            <sphereGeometry></sphereGeometry>
            <meshNormalMaterial></meshNormalMaterial>
          </mesh>
        }
      >
        <Environment preset="city" />
        <group rotation={[0, Math.PI, 0]} onClick={handleOpenToggle}>
          <FloatingLaptop
            open={openLaptop}
            openDegreeRad={openDegreeRad}
            initialTexture={initialTexture}
            shaderRef={onScreenShaderMaterialRef}
          />
        </group>
      </Suspense>
      <ContactShadows
        position={[0, -4.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4.5}
      />
      <OrbitControls enableZoom={false} />
      {/* <axesHelper args={[500]} /> */}
    </>
  );
};

export default AnimatedScene;
