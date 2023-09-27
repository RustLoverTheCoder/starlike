import { useEffect, useRef } from "react";
import HySky from "./sky";

export const Sky = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      HySky();
    }
  }, [canvasRef]);
  return (
    <canvas
      ref={canvasRef}
      id="hy-sky"
      className="absolute top-0 right-0 bottom-0 left-0"
    />
  );
};
