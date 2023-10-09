import React, { useState, useRef, useEffect, useCallback } from "react";
import { TweenMax, Circ } from "gsap";
import BScroll from "@better-scroll/core";
import { cn } from "@utils/cn";
import "./Nav.css";
import { useAtom } from "jotai";
import { yearAtom } from "./atoms";

type Timeline =
  | {
      id: number;
      year: string;
      title: string;
      titlePre: string;
      suffix: string[];
      bg: never[];
    }
  | {
      id: number;
      year: string;
      title: string;
      titlePre: string;
      suffix: never[];
      bg?: undefined;
    };

const timeLine: Timeline[] = [
  {
    id: 1,
    year: "138",
    title: "138",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 2,
    year: "57",
    title: "57",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 3,
    year: "52",
    title: "52",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 4,
    year: "46",
    title: "46",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 5,
    year: "385",
    title: "38.5",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 6,
    year: "53",
    title: "5.3",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 7,
    year: "320",
    title: "320",
    titlePre: "",
    suffix: ["THOUSAND", "YEARS AGO"],
    bg: [],
  },
  {
    id: 8,
    year: "8000",
    title: "8",
    titlePre: "",
    suffix: ["THOUSAND", "YEARS AGO"],
    bg: [],
  },
  {
    id: 9,
    year: "3500",
    title: "3.5",
    titlePre: "",
    suffix: ["THOUSAND", "YEARS AGO"],
    bg: [],
  },
  {
    id: 10,
    year: "18",
    title: "18",
    titlePre: "",
    suffix: ["CENTURY", "AGO"],
    bg: [],
  },
  {
    id: 11,
    year: "1961",
    title: "1961",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 12,
    year: "1969",
    title: "1969",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 13,
    year: "1971",
    title: "1971",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 14,
    year: "2015",
    title: "2015",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 15,
    year: "2035",
    title: "2035",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 16,
    year: "2083",
    title: "2083",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 17,
    year: "2089",
    title: "2089",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 19,
    year: "2101",
    title: "2101",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 20,
    year: "2144",
    title: "2144",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 21,
    year: "2195",
    title: "2195",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 22,
    year: "3501",
    title: "元年",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 23,
    year: "160",
    title: "160",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 24,
    year: "242",
    title: "242",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 25,
    year: "275",
    title: "275",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 26,
    year: "307",
    title: "307",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 27,
    year: "630",
    title: "630",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 28,
    year: "767",
    title: "767",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 29,
    year: "862",
    title: "862",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 30,
    year: "949",
    title: "949",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 31,
    year: "958",
    title: "958",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 32,
    year: "992",
    title: "992",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 33,
    year: "1012",
    title: "1012",
    titlePre: "NE",
    suffix: [],
  },
];

export const Nav = () => {
  const [year, setYear] = useAtom(yearAtom);
  const [updating, setUpdating] = useState(false);

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
