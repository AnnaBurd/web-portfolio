"use client";

import * as THREE from "three";
import { createPortal, useFrame } from "@react-three/fiber";
import { OrthographicCamera, useFBO } from "@react-three/drei";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";

// GLSL SHADERS:
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShaderBuff from "./shaders/fragmentShaderBuff.glsl";

type GameState = {
  renderTarget: "A" | "B";
  frame: number;
  screenSize: { width: number; height: number };
  refreshDeltaThreshold: number;
  additionalDeltaThreshold: number;
  currentRefreshDelta: number;
};

const defaultGameState: GameState = {
  renderTarget: "A",
  frame: -1,
  screenSize: { width: 100, height: 100 },
  refreshDeltaThreshold: 0.2,
  additionalDeltaThreshold: 1,
  currentRefreshDelta: 10,
};

const hiddenRenderTargetSettings = {
  minFilter: THREE.NearestFilter,
  magFilter: THREE.NearestFilter,
  format: THREE.RGBAFormat,
  type: THREE.FloatType,
  stencilBuffer: false,
};

type Props = {
  initialTexture: THREE.Texture;
  shaderRef: RefObject<THREE.ShaderMaterial>;
  animationState: "idle" | "running" | "paused";
  gameScreenSize?: GameState["screenSize"];
  refreshDeltaThreshold?: GameState["refreshDeltaThreshold"];
};

const GameOfLife: React.FC<Props> = ({
  animationState,
  initialTexture,
  shaderRef,
  ...props
}) => {
  // Game state
  const currentGameState = useRef<GameState>({
    ...defaultGameState,
    ...props,
  });

  const gameScreenWidth = currentGameState.current.screenSize.width;
  const gameScreenHeight = currentGameState.current.screenSize.height;

  // Reference to offscren rendering elements
  const [magicScene] = useState(() => new THREE.Scene());
  const magicCamera = useRef<THREE.OrthographicCamera>(null);
  const magicRenderTargetA = useFBO(
    gameScreenWidth,
    gameScreenHeight,
    hiddenRenderTargetSettings,
  );
  const magicRenderTargetB = useFBO(
    gameScreenWidth,
    gameScreenHeight,
    hiddenRenderTargetSettings,
  );
  const magicShaderMaterial = useRef<THREE.ShaderMaterial>(null);
  const magicUniforms = useMemo(
    () => ({
      u_texture: {
        value: initialTexture, // Initial texture to render, will be changed in rendering loop using shader
      },
    }),
    [initialTexture],
  );

  // Update animation delta threshold

  // Logic for frame rendering in animation loop
  useFrame((state, delta) => {
    if (
      !magicCamera.current ||
      !magicShaderMaterial.current ||
      !shaderRef.current ||
      animationState !== "running"
    ) {
      return;
    }

    // Drop frames
    currentGameState.current.currentRefreshDelta += delta;
    if (
      currentGameState.current.currentRefreshDelta <
      currentGameState.current.refreshDeltaThreshold +
        currentGameState.current.additionalDeltaThreshold
    ) {
      return;
    }
    currentGameState.current.currentRefreshDelta = 0;

    if (currentGameState.current.additionalDeltaThreshold > 0.1) {
      const decayRate = 0.6;
      currentGameState.current.additionalDeltaThreshold *= decayRate - 0.05;
    } else {
      currentGameState.current.additionalDeltaThreshold = 0;
    }

    // Render offscreen texture
    const currentRenderTarget = currentGameState.current.renderTarget;
    const frameRenderTarget =
      currentRenderTarget === "A" ? magicRenderTargetA : magicRenderTargetB;
    // Swap render targets for next frame
    currentGameState.current.renderTarget =
      currentRenderTarget === "A" ? "B" : "A";

    const { gl } = state;

    gl.setRenderTarget(frameRenderTarget);
    gl.render(magicScene, magicCamera.current);

    const renderedTexture = frameRenderTarget.texture;

    // Update the shader material for offscreen rendering -> it will be used as input for the next frame
    magicUniforms.u_texture.value = renderedTexture;

    // Update the shader material for on-screen rendering
    shaderRef.current.uniforms.u_texture.value = renderedTexture;

    gl.setRenderTarget(null); // Render to the screen
  });

  useEffect(() => {
    if (animationState === "paused") {
      currentGameState.current.currentRefreshDelta = -0.6;
    }
  }, [animationState]);

  return (
    <>
      {createPortal(
        <>
          <OrthographicCamera
            ref={magicCamera}
            makeDefault
            // Position the camera to show the entire game screen
            position={[0, 0, 10]}
            // Boundaries of the camera's view frustum
            left={-gameScreenWidth / 2}
            right={gameScreenWidth / 2}
            top={gameScreenHeight / 2}
            bottom={-gameScreenHeight / 2}
            near={0.1} // Near clipping plane
            far={1000} // Far clipping plane
          />
          <mesh>
            <planeGeometry args={[gameScreenWidth, gameScreenHeight]} />
            <shaderMaterial
              ref={magicShaderMaterial}
              fragmentShader={fragmentShaderBuff}
              vertexShader={vertexShader}
              uniforms={magicUniforms}
            />
          </mesh>
        </>,
        magicScene,
      )}
    </>
  );
};

export default GameOfLife;
