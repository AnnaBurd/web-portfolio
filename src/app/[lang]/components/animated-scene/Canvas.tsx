"use client";

import { Canvas as CanvasContainer } from "@react-three/fiber";

type Props = {
  children: React.ReactNode;
};
const Canvas: React.FC<Props> = ({ children }) => {
  return (
    <CanvasContainer
      dpr={typeof window !== "undefined" ? window.devicePixelRatio : 2}
      camera={{ position: [-0.5, 0, -18], fov: 45 }}
    >
      {children}
    </CanvasContainer>
  );
};

export default Canvas;
