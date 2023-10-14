import { useState } from "react";

export const StarWhisperer = () => {
  const [active, setActive] = useState(0);
  const list = [
    {
      id: "cpgu",
      bg: "/images/starwhisperer/cpgu-bg.webp",
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
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <img
        src={list[active]?.bg}
        alt=""
        className="w-full h-full object-cover object-center"
        style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 36% 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="absolute top-[-20%] w-[116%] left-[24%]">
        <img
          src={list[active].whisperer}
          alt=""
          className="w-full object-contain"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-[14%] right-0">
        <img
          src="/images/starwhisperer/shadow.webp"
          alt=""
          className="w-full object-cover object-right"
        />
      </div>
      {/* info */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-start items-center px-[120px]">
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
    </div>
  );
};