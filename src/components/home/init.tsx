import { useEffect } from "react";
import gsap, { Cubic, Linear, Power2, TimelineLite, TweenMax } from "gsap";

export const HomeInit = () => {
  useEffect(() => {
    console.log("gsap", gsap);
    let partTimeLine = gsap?.timeline();
    console.log("partTimeLine", partTimeLine);
    partTimeLine.add(
      TweenMax.to("#home-star", 850, {
        rotation: 360,
        repeat: -1,
        ease: Linear.easeNone,
      }),
      0.09
    );
  }, []);

  return null;
};
