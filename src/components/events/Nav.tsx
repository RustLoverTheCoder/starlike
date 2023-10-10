import React, { useState, useRef, useEffect, useCallback } from "react";
import { TweenMax, Circ } from "gsap";
import BScroll from "@better-scroll/core";
import { cn } from "@utils/cn";
import "./Nav.css";
import { useAtom, useAtomValue } from "jotai";
import { timeLineAtom, yearAtom } from "./atoms";



export const Nav = () => {
  const [year, setYear] = useAtom(yearAtom);
  const [updating, setUpdating] = useState(false);
  const timeLine = useAtomValue(timeLineAtom)

  const navRef = useRef<HTMLDivElement>(null);

  const innerRef = useRef<HTMLDivElement>(null);

  const scrollAction = useCallback(() => {
    // handle scroll
  }, []);

  const updateYear = useCallback(
    (newYear: string) => {
      if (!updating) {
        setYear(newYear);

        // update position
        // animate active item

        setUpdating(true);

        setTimeout(() => {
          setUpdating(false);
        }, 1600);
      }
    },
    [updating]
  );

  const handleAutoPlay = useCallback(() => {
    // auto play logic
  }, []);

  useEffect(() => {
    if (!navRef.current) {
      return;
    }
    const navScroll = new BScroll(navRef.current, {
      scrollX: true,
      click: true,
    });

    navScroll.on("scroll", handleAutoPlay);

    return () => {
      navScroll.destroy();
    };
  }, [navRef]);

  useEffect(() => {
    window.addEventListener("mousewheel", scrollAction);

    return () => {
      window.removeEventListener("mousewheel", scrollAction);
    };
  }, [scrollAction]);

  return (
    <div
      id="hy-events-nav"
      ref={navRef}
      className="fixed w-screen z-[99] select-none left-0 bottom-[51.75px]"
    >
      <div className="hy-line absolute w-full flex select-none bottom-0">
        <div className="hy-line-r w-[202px] bg-[url(/images/events/nav-line\_right.png)] bg-right h-px"></div>
        <div className="hy-line-m w-[calc(100%_-_400px)] bg-[url(/images/events/nav-line\_middle.png)] bg-repeat h-px"></div>
        <div className="hy-line-l w-[198px] bg-[url(/images/events/nav-line\_left.png)] bg-left h-px"></div>
      </div>

      <div className="hy-nav-container w-[calc(100%_-_193.5px)] box-border overflow-x-auto overflow-y-hidden whitespace-nowrap touch-pan-y mt-0 -mb-4 mx-auto">
        <div className="hy-nav-inner inline-block" ref={innerRef}>
          {timeLine.map((item) => (
            <div
              key={item.id}
              className={cn(
                `hy-nav-${item.year} inline-block relative w-[82.5px] h-[60px] min-w-[90px] min-h-[50px] mx-[22.5px] my-0`,
                "hy-nav-item",
                item.year === year ? "" : ""
              )}
              onClick={() => updateYear(item.year)}
            >
              <div
                className={cn(
                  "hy-item__active absolute w-[82.5px] min-w-[90px] h-full top-0"
                )}
                style={
                  item.year === year
                    ? {
                        background:
                          "linear-gradient(to top, rgba(255, 145, 47, 0.15), transparent)",
                      }
                    : {}
                }
              >
                <div
                  className={cn(
                    "hy-item__active--line",
                    item.year === year &&
                      "absolute -translate-x-2/4 translate-y-0 w-full h-[3px] bg-[#ffebc6] shadow-[0_0_16px_rgba(255,141,40,0.84)] left-2/4 bottom-0"
                  )}
                ></div>
              </div>

              <div
                className={`hy-item__container relative flex flex-nowrap items-center justify-center h-[2rem] top-0 ${
                  item.suffix.length > 0 ? "hy-transition-repair ml-2" : ""
                }`}
              >
                <div
                  className={cn(
                    "hy-item__year text-base tracking-wide transition-[color] duration-[0.3s]",
                    item.year === year ? "text-white" : "text-[#878383]"
                  )}
                >
                  <span>{item.titlePre}</span>
                  {item.title}
                </div>
                {item.suffix.length > 0 && (
                  <div className="hy-item__suffix -ml-1.5 shrink-0">
                    <p
                      className={cn(
                        "text-[8.06px] tracking-[0.075em] leading-none transition-[color] duration-[0.3s] scale-[0.6716666667]",
                        item.year === year ? "text-[#dab061]" : "text-[#878383]"
                      )}
                    >
                      {item.suffix[0]}
                    </p>
                    <p
                      className={cn(
                        "text-[8.06px] tracking-[0.075em] leading-none transition-[color] duration-[0.3s] scale-[0.6716666667]",
                        item.year === year ? "text-[#dab061]" : "text-[#878383]"
                      )}
                    >
                      {item.suffix[1]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
