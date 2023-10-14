import { cn } from "@utils/cn";
import { useState } from "react";
const FeaturedStars = [
  {
    id: 0,
    name: "行星状星云",
    subTitle: "BlackHole",
    image: "/images/celestial/行星状星云.webp",
    info: "自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时我们必须守护着人类的火种，以及这文明数千年的约定",
    infoImage: "",
  },
];

const OrdinaryStars = [
  {
    id: 0,
    name: "火山型星云",
    subTitle: "VOLCANIC PLANET",
    image: "/images/celestial/ordinaryStar0.webp",
    info: "自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情 作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时 我们必须守护着人类的火种，以及这文明数千年的约定",
    infoImage: "",
  },
];

export const CelestialPage = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [featuredStar, setFeaturedStar] = useState(0);
  const [ordinaryStar, setOrdinaryStar] = useState(0);
  return (
    <div className="w-screen h-screen relative">
      <img
        src={
          activeNav === 0
            ? FeaturedStars[featuredStar].image
            : OrdinaryStars[ordinaryStar].image
        }
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-end items-center px-[120px]">
        <div className="container max-w-[690px]">
          <div className="title w-full h-auto text-right flex justify-end items-center">
            <div className="flex flex-col">
              <div className="text-6xl mb-2">
                {activeNav === 0
                  ? FeaturedStars[featuredStar].name
                  : OrdinaryStars[ordinaryStar].name}
              </div>
              <div className="text-2xl uppercase">
                {activeNav === 0
                  ? FeaturedStars[featuredStar].subTitle
                  : OrdinaryStars[ordinaryStar].subTitle}
              </div>
            </div>
            <div className="h-[100px] w-10 shadow-[0_0_10px_rgba(255,179,70,0.56),0_0_10px_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56)] ml-6 border-2 border-solid border-[#ffd790]"></div>
          </div>
          <div className="w-full h-px bg-[#765a2b] mx-0 my-7"></div>
          <div
            className="text-left tracking-[0px] text-white opacity-100"
            style={{ textShadow: "-5px 0px 9px #000000" }}
          >
            {activeNav === 0
              ? FeaturedStars[featuredStar].info
              : OrdinaryStars[ordinaryStar].info}
          </div>
          <div className="w-full">
            {activeNav === 0 ? (
              <>
                {FeaturedStars[featuredStar].infoImage && (
                  <img
                    src={FeaturedStars[featuredStar].infoImage}
                    alt=""
                    className="w-[400px]"
                  />
                )}
              </>
            ) : (
              <>
                {OrdinaryStars[ordinaryStar].infoImage && (
                  <img
                    src={OrdinaryStars[ordinaryStar].infoImage}
                    alt=""
                    className="w-[400px]"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* digit */}
      <div className="absolute bottom-[80px] left-[200px] z-10">
        <div className="text-3xl text-right tracking-[2.3px] text-[#7E704F]">
          {`< `}
          <span className="text-[#F5CE70]">05</span>
          {`/15 >`}
        </div>
      </div>
      {/* nav */}
      <div className="absolute top-[20%] left-[58px] flex flex-col z-10">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setActiveNav(0)}
        >
          <div
            className={cn(
              "text-2xl transition-all",
              activeNav === 0 ? "text-[#FFE19E]" : "text-[#5E5E5E]"
            )}
          >
            特殊天体
          </div>
          <div
            className={cn(
              "text-sm transition-all",
              activeNav === 0 ? "text-[#FFE19E]" : "text-[#5E5E5E]"
            )}
          >
            SPECIAL CELESTIAL BODIES
          </div>
        </div>
        <div
          className="flex flex-col mt-[54px] cursor-pointer"
          onClick={() => setActiveNav(1)}
        >
          <div
            className={cn(
              "text-2xl transition-all",
              activeNav === 1 ? "text-[#FFE19E]" : "text-[#5E5E5E]"
            )}
          >
            一般天体
          </div>
          <div
            className={cn(
              "text-sm transition-all",
              activeNav === 1 ? "text-[#FFE19E]" : "text-[#5E5E5E]"
            )}
          >
            SPECIAL CELESTIAL BODIES
          </div>
        </div>
      </div>
    </div>
  );
};
