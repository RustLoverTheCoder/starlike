import { useRef, useState } from "react";
import gsap from "gsap";
import { FooterNav } from "@components/footerNav";
import { cn } from "@utils/cn";

export const StarWhisperer = () => {
  const [active, setActive] = useState(0);
  const whispererRef = useRef(null);
  const bgRef = useRef(null);
  const list = [
    {
      id: "cpgu",
      nav: "01",
      bg: "/images/starwhisperer/cpgu-bg.webp",
      bg2: "/images/starwhisperer/cpgu-bg2.webp",
      whisperer: "/images/starwhisperer/cpgu-whisperer.webp",
      name: "萨卡林.梅森",
      subTitle: "SAKLIN.MEISE",
      image: "/images/celestial/行星状星云.webp",
      infoMain:
        "“舰种搭配、阵型调整、舰长组合.优秀的执政官总是能制定出最合时宜的舰队策略而在战场上”",
      infoSub:
        "自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时我们必须守护着人类的火种，以及这文明数千年的约定",
    },
    {
      id: "cpgu",
      nav: "02",
      bg: "/images/starwhisperer/cpgu-bg.webp",
      bg2: "/images/starwhisperer/cpgu-bg2.webp",
      whisperer: "/images/starwhisperer/cpgu-whisperer.webp",
      name: "萨卡林.梅森",
      subTitle: "SAKLIN.MEISE",
      image: "/images/celestial/行星状星云.webp",
      infoMain:
        "“舰种搭配、阵型调整、舰长组合.优秀的执政官总是能制定出最合时宜的舰队策略而在战场上”",
      infoSub:
        "自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时我们必须守护着人类的火种，以及这文明数千年的约定",
    },
  ];

  const item = list[active];

  const handleMouseOver = (e: any) => {
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    let offsetXRate = 0.5 - e.pageX / winWidth; // 光标X轴位置
    let offsetYRate = 0.5 - e.pageY / winHeight; // 光标Y轴位置
    let distance = 10;
    if (!whispererRef.current || !bgRef.current) {
      return;
    }
    gsap.to(bgRef.current, 0.4, {
      overwrite: true,
      translateX: `${-offsetXRate * distance * 3}px`,
      translateY: `${-offsetYRate * distance * 2}px`,
    });
    gsap.to(whispererRef.current, 0.4, {
      overwrite: true,
      translateX: `${-offsetXRate * distance * 6}px`,
      translateY: `${-offsetYRate * distance * 4}px`,
    });
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden object-cover object-left"
      onMouseOver={handleMouseOver}
      style={{ backgroundImage: `url(${list[active]?.bg2})` }}
    >
      <img
        src={list[active]?.bg}
        alt=""
        ref={bgRef}
        className="w-full h-full object-cover object-center"
        style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 36% 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="absolute top-[-20%] w-[116%] left-[24%]">
        <img
          src={list[active].whisperer}
          alt=""
          ref={whispererRef}
          className="w-full object-contain"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-[14%] right-0">
        <img
          src="/images/starwhisperer/shadow.webp"
          alt=""
          className="w-full h-full object-cover object-right"
        />
      </div>
      {/* info */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-start items-center px-[13vw]">
        <div className="container max-w-[690px]">
          <div className="title w-full h-auto text-left flex justify-start items-center">
            <div className="h-[100px] w-10 shadow-[0_0_10px_rgba(255,179,70,0.56),0_0_10px_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56)] ml-6 border-2 border-solid border-[#ffd790]"></div>
            <div className="flex flex-col ml-5">
              <div className="text-6xl mb-2">{list[active].name}</div>
              <div className="text-2xl uppercase">{list[active].subTitle}</div>
            </div>
          </div>
          <div className="w-full h-px bg-[#765a2b] mx-0 my-7"></div>
          <div
            className="text-left tracking-[0px] text-white opacity-100"
            style={{ textShadow: "-5px 0px 9px #000000" }}
          >
            {list[active].infoMain}
          </div>
          <div className="text-left tracking-[0px] text-white opacity-100 mt-20">
            {list[active].infoSub}
          </div>
        </div>
      </div>
      <FooterNav
        current={active}
        setCurrent={setActive}
        nav={item.nav}
        list={list}
      />
      {/* nav */}
      <PageNav active={active} />
    </div>
  );
};

const PageNav = ({ active }: { active: number }) => {
  const list = [
    {
      id: 0,
      title: "一体汉和",
      en: "MOUTAINPASSFEDERATION",
    },
    {
      id: 1,
      title: "沙顿穆恩帝国",
      en: "BATTLESHIP",
    },
    {
      id: 2,
      title: "芒廷帕斯联合会",
      en: "BATTLESHIP",
    },
    {
      id: 3,
      title: "赛琳娜之耀",
      en: "BATTLESHIP",
    },
    {
      id: 4,
      title: "圣瞳会",
      en: "BATTLESHIP",
    },
  ];
  return (
    <div className="absolute left-[2vw] top-0 bottom-0 flex flex-col space-y-[4.6vh] justify-center">
      {list.map((i) => {
        const isActive = active === i.id
        return (
          <div
            className={cn(
              "w-full h-auto relative flex flex-col items-center text-[#5E5E5E] hover:text-[#FFE19E]",
              isActive ? "text-[#FFE19E]" : ""
            )}
            key={i.id}
          >
            <div className={cn("text-xl")}>{i.title}</div>
            <div className={cn("text-[13px]")}>{i.en}</div>
          </div>
        );
      })}
    </div>
  );
};
