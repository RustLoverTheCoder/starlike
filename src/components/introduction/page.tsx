import { cn } from "@utils/cn";
import { useState } from "react";

const list = [
  {
    id: 1,
    nav: "01",
    title: "星语者系统",
    en: "STARWHISPERER SYSTEM",
    titleInfo:
      "舰种搭配、阵型调整、舰长组合. 优秀的执政官总是能制定出最合时宜的舰队策略而在战场上，就把广袤的舞台交给你所信赖的舰长们 好好欣赏他们为你上演的精彩角斗",
    background: "/images/introduction/bg01.webp",
    screenshot1: "/images/introduction/screenshot01.webp",
    screenshot1Width: "w-[32vw]",
    screenshot2: "/images/introduction/screenshot02.webp",
    screenshot2Width: "w-[48vw]",
    otherTitle: "星语者的",
    otherTitleSubTitle: "策略和养成",
    otherInfo:
      "自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情 作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时，我们必须确保我们占据的星系有充足资源，以及不断加强我们舰队的力量。记得站在将会守护人类的星语者们的身后，并时刻注意聆听黑暗宇宙之中对我们觊觎已久并已蠢蠢欲动的声音。 我们必须守护着人类的火种，以及这文明数千年的约定",
    direction: "left",
  },
  {
    id: 2,
    nav: "02",
    title: "星舰系统",
    en: "STARWHISPERER SYSTEM",
    titleInfo:
      "舰种搭配、阵型调整、舰长组合. 优秀的执政官总是能制定出最合时宜的舰队策略而在战场上，就把广袤的舞台交给你所信赖的舰长们 好好欣赏他们为你上演的精彩角斗",
    background: "/images/introduction/bg02.webp",
    screenshot1: "/images/introduction/screenshot03.webp",
    screenshot1Width: "w-[32vw]",
    screenshot2: "/images/introduction/screenshot04.webp",
    screenshot2Width: "w-[48vw]",
    otherTitle: "星舰的",
    otherTitleSubTitle: "策略和养成",
    otherInfo:
      "自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情 作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时，我们必须确保我们占据的星系有充足资源，以及不断加强我们舰队的力量。记得站在将会守护人类的星语者们的身后，并时刻注意聆听黑暗宇宙之中对我们觊觎已久并已蠢蠢欲动的声音。 我们必须守护着人类的火种，以及这文明数千年的约定",
    direction: "right",
  },
];

export const IntroductionPage = () => {
  const [current, setCurrent] = useState(1);
  const data = list[current];
  const direction = data.direction;
  const screenshot1 = data.screenshot1;
  const screenshot2 = data.screenshot2;
  const screenshot1Width = data.screenshot1Width;
  const screenshot2Width = data.screenshot2Width;
  const en = data.en;
  const title = data.title;
  const titleInfo = data.titleInfo;
  const otherTitle = data.otherTitle;
  const otherTitleSubTitle = data.otherTitleSubTitle;
  const otherInfo = data.otherInfo;
  const nav = data.nav;
  const id = data.id;
  return (
    <div className="w-full h-full relative overflow-hidden max-w-full max-h-full bg-[#000000]">
      <img
        src={data.background}
        alt=""
        style={
          direction === "left"
            ? { clipPath: "polygon(0 0, 78% 0, 43% 100%, 0% 100%)" }
            : { clipPath: "polygon(24% 0, 100% 0, 100% 100%, 54% 100%)" }
        }
        className={cn(
          "w-full h-full object-cover object-center",
          direction === "left" ? "" : ""
        )}
      />
      {/* screenshot2 */}
      <div
        className={cn(
          "absolute z-10",
          direction === "left"
            ? "top-[14vh] left-[12.7vw]"
            : "top-[14vh] left-[12.7vw]"
        )}
      >
        <img src={screenshot2} alt="" className={screenshot1Width} />
      </div>
      {/* screenshot1 */}
      <div
        className={cn(
          "absolute z-[11]",
          direction === "left"
            ? "top-[43vh] left-[20vw]"
            : "top-[43vh] left-[20vw]"
        )}
      >
        <img src={screenshot1} alt="" className={screenshot2Width} />
      </div>
      {/* title */}
      <div className="absolute left-0 top-[23vh] z-[12]">
        <div className="pl-[6vw] flex items-center relative">
          <div className="h-[120px] w-10 shadow-[0_0_10px_rgba(255,179,70,0.56),0_0_10px_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56)] mr-6 border-2 border-solid border-[#ffd790]"></div>
          <div className="flex flex-col">
            <div className="max-w-[376px] text-4xl text-left mb-[2vh]">
              {en}
            </div>
            <div className="text-4xl text-left">{title}</div>
          </div>
          <div
            className="absolute text-[#FFE19E] text-[120px] -top-[60px] left-[90px]"
            style={{ textShadow: "0.5px 0.87px 5px #0000008F" }}
          >
            {id}
          </div>
        </div>
        <div className="w-[36vw] max-w-[704px] h-0.5 bg-[#765a2b] my-[2.8vh]" />
        <div className="pl-[6vw] w-auto h-auto">
          <div className="w-[15vw] max-w-[291px] text-lg text-right">
            {titleInfo}
          </div>
        </div>
      </div>
      {/* other */}
      <div className="absolute right-0 bottom-[20vh] flex flex-col z-[13]">
        <div className="flex flex-col">
          <div className="text-3xl">{otherTitle}</div>
          <div className="text-4xl">{otherTitleSubTitle}</div>
        </div>
        {/* line */}
        <div className="w-[36vw] max-w-[704px] h-0.5 bg-[#765a2b] my-[2.8vh]" />
        <div className="w-auto h-auto">
          <div className="w-[27vw] max-w-[537px]">{otherInfo}</div>
        </div>
      </div>
      {/* nav */}
      <div className="absolute left-[10vw] bottom-[7.6vh] text-[#7E704F] text-3xl z-[14]">
        <span
          className="cursor-pointer"
          onClick={() => {
            if (current > 0) {
              setCurrent(current - 1);
            } else {
              setCurrent(list.length);
            }
          }}
        >{`< `}</span>
        <span className="text-[#F5CE70]">{nav}</span>
        {`/2`}
        <span
          className="cursor-pointer"
          onClick={() => {
            if (current < list.length - 1) {
              setCurrent(current + 1);
            } else {
              setCurrent(0);
            }
          }}
        >{` >`}</span>
      </div>
    </div>
  );
};
