import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

let Canvas: any;
let AnimatedScene: any;

if (typeof window !== "undefined" && window.innerWidth > 768) {
  Canvas = dynamic(() => import("./Canvas"), { ssr: false });
  AnimatedScene = dynamic(() => import("./AnimatedScene"), { ssr: false });
}

const AnimatedSceneOnCanvas: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (AnimatedScene) setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return (
    <div className="border-red absolute bottom-[clamp(2rem,8vh,10rem)] right-8 z-50 h-96 w-[clamp(24rem,50%,50rem)] border">
      <Canvas>
        <AnimatedScene />
      </Canvas>
    </div>
  );
};

export default AnimatedSceneOnCanvas;
