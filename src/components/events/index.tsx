import { cn } from "@utils/cn";
import { useAtomValue } from "jotai";
import { yearAtom } from "./atoms";
import { useMemo } from "react";

type EventType = {
  id: number;
  num: number | string;
  year?: string;
  ear: string;
  title: string;
  titleEn: string;
  earBefore: boolean | string;
  layoutRight: boolean;
};

const timeLine: Record<string, EventType> = {
  year_138: {
    id: 1,
    num: 138,
    ear: "亿年前",
    title: "宇宙大爆炸",
    titleEn: "The Big Bang",
    earBefore: false,
    layoutRight: true,
  },
  year_57: {
    id: 2,
    num: 57,
    ear: "亿年前",
    title: "宇普西隆空洞诞生",
    titleEn: "Upsilon Cosmic Voids",
    earBefore: false,
    layoutRight: false,
  },
  year_52: {
    id: 3,
    num: 52,
    ear: "亿年前",
    title: "普拉帕特洛星系大爆炸",
    titleEn: "Praptro Disaster",
    earBefore: false,
    layoutRight: true,
  },
  year_46: {
    id: 4,
    num: 46,
    ear: "亿年前",
    title: "太阳系诞生",
    titleEn: "The solar system was born",
    earBefore: false,
    layoutRight: false,
  },
  year_385: {
    id: 5,
    num: 38.5,
    year: "385",
    ear: "亿年前",
    title: "地球生物始祖诞生",
    titleEn: "The Begining of Life",
    earBefore: false,
    layoutRight: true,
  },
  year_53: {
    id: 6,
    num: 5.3,
    year: "53",
    ear: "亿年前",
    title: "寒武纪生命大爆发",
    titleEn: "Cambrian life explosion",
    earBefore: false,
    layoutRight: false,
  },
  year_320: {
    id: 7,
    num: 320,
    ear: "万年前",
    title: "“露西”的直立行走",
    titleEn: "LUCY Walk",
    earBefore: false,
    layoutRight: true,
  },
  year_8000: {
    id: 8,
    num: 8000,
    ear: "年",
    title: "人类农业革命",
    titleEn: "Primitive Agricultural Society",
    earBefore: "AD.前",
    layoutRight: false,
  },
  year_3500: {
    id: 9,
    num: 3500,
    ear: "年",
    title: "文明初现",
    titleEn: "The Birth of Civilization",
    earBefore: "AD.前",
    layoutRight: true,
  },
  year_18: {
    id: 10,
    num: 18,
    ear: "世纪",
    title: "工业革命爆发",
    titleEn: "The Industrial Revolution",
    earBefore: "AD.",
    layoutRight: false,
  },
  year_1961: {
    id: 11,
    num: 1961,
    ear: "年",
    title: "人类向太空进发",
    titleEn: "Humans march into space",
    earBefore: "AD.",
    layoutRight: true,
  },
  year_1969: {
    id: 12,
    num: 1969,
    ear: "年",
    title: "人类首次登陆地外天体",
    titleEn: "First Step on Outerworld",
    earBefore: "AD.",
    layoutRight: false,
  },
  year_1971: {
    id: 13,
    num: 1971,
    ear: "年",
    title: "人类的第一座空间站",
    titleEn: "First Spacestation",
    earBefore: "AD.",
    layoutRight: true,
  },
  year_2015: {
    id: 14,
    num: 2015,
    ear: "年",
    title: "FRB150418",
    titleEn: "Fast Radio Bursts 150418",
    earBefore: "AD.",
    layoutRight: false,
  },
  year_2035: {
    id: 15,
    num: 2035,
    ear: "年",
    title: "国际太空探索委员会成立",
    titleEn: "ISEC Established",
    earBefore: "AD.",
    layoutRight: true,
  },
  year_2083: {
    id: 16,
    num: 2083,
    ear: "年",
    title: "人类首次发现落日晶",
    titleEn: "First view of Sunset Crystal",
    earBefore: "AD.",
    layoutRight: false,
  },
  year_2089: {
    id: 17,
    num: 2089,
    ear: "年",
    title: "人类首次提炼出星尘",
    titleEn: "Pure Stardust Refined",
    earBefore: "AD.",
    layoutRight: true,
  },
  year_2101: {
    id: 19,
    num: 2101,
    ear: "年",
    title: "相际革命爆发",
    titleEn: "The Interphase Revolution",
    earBefore: "AD.",
    layoutRight: false,
  },
  year_2144: {
    id: 20,
    num: 2144,
    ear: "年",
    title: "巡礼者计划实施",
    titleEn: "Project Pilgrim Implementation",
    earBefore: "AD.",
    layoutRight: true,
  },
  year_2195: {
    id: 21,
    num: 2195,
    ear: "年",
    title: "船团首次成功试航",
    titleEn: "First Successful Trial",
    earBefore: "AD.",
    layoutRight: false,
  },
  year_3501: {
    id: 22,
    num: "元年",
    year: "3501",
    ear: "",
    title: "第二船团抵达图兰星",
    titleEn: "New Home - Turan",
    earBefore: "N.E.",
    layoutRight: true,
  },
  year_160: {
    id: 23,
    num: "160",
    ear: "年",
    title: "第四船团抵达龙藻星",
    titleEn: "New Home - Longalgae",
    earBefore: "N.E.",
    layoutRight: false,
  },
  year_242: {
    id: 24,
    num: "242",
    ear: "年",
    title: "人类重建联络",
    titleEn: "Reunion",
    earBefore: "N.E.",
    layoutRight: true,
  },
  year_275: {
    id: 25,
    num: "275",
    ear: "年",
    title: "第八船团抵达塞维利星",
    titleEn: "New Home - Seville",
    earBefore: "N.E.",
    layoutRight: false,
  },
  year_307: {
    id: 26,
    num: "307",
    ear: "年",
    title: "第七船团抵达卡萨伊罗娜星",
    titleEn: "New Home - Kassairona",
    earBefore: "N.E.",
    layoutRight: true,
  },
  year_630: {
    id: 27,
    num: "630",
    ear: "年",
    title: "第十船团抵达辉夙",
    titleEn: "New Home - Destined Bright",
    earBefore: "N.E.",
    layoutRight: false,
  },
  year_767: {
    id: 28,
    num: "767",
    ear: "年",
    title: "染山霞血脉的定名",
    titleEn: "Alpenglow Blood Named",
    earBefore: "N.E.",
    layoutRight: true,
  },
  year_862: {
    id: 29,
    num: "862",
    ear: "年",
    title: "解理战争爆发",
    titleEn: "War of Cleavage Broke out",
    earBefore: "N.E.",
    layoutRight: false,
  },
  year_949: {
    id: 30,
    num: "949",
    ear: "年",
    title: "星语者学院成立",
    titleEn: "Starwhisperd College Established",
    earBefore: "N.E.",
    layoutRight: true,
  },
  year_958: {
    id: 31,
    num: "958",
    ear: "年",
    title: "波江座协定签署",
    titleEn: "Eridanus Agreement Signed",
    earBefore: "N.E.",
    layoutRight: false,
  },
  year_992: {
    id: 32,
    num: "992",
    ear: "年",
    title: "光海声明发表",
    titleEn: "Sea of Light Declared",
    earBefore: "N.E.",
    layoutRight: true,
  },
  year_1012: {
    id: 33,
    num: "1012",
    ear: "年",
    title: "你的时代",
    titleEn: "YOUR TIMES",
    earBefore: "N.E.",
    layoutRight: false,
  },
};

export const Events = () => {
  const year = useAtomValue(yearAtom);
  const { title, titleEn } = timeLine[`year_${year}`];
  const event = useMemo(() => {
    return timeLine?.[`year_${year}`] || {};
  }, [year]);
  const direction = !!event?.layoutRight ? "right" : "left";
  return (
    <div
      className="w-screen h-screen relative text-white"
      style={{
        textShadow:
          "0 5px 8px rgba(0, 0, 0, 0.38), 0 5px 8px rgba(0, 0, 0, 0.38)",
      }}
    >
      <img
        src={`/images/events/${year}.webp`}
        alt="events"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-screen box-border px-[129px] py-0 left-0 bottom-[18vh]">
        <div
          className="hy-info relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* time */}
          <div className="hy-section_time relative font-normal mb-[42px]">
            <h1 className={cn("text-white", "text-right")}>
              <div className="relative z-10 translate-y-4">
                <span className="text-[135.6px] leading-none">{event.num}</span>
                <span className="text-[48px] top-[15px]">{event.ear}</span>
              </div>
            </h1>
          </div>
          {/* content */}
          <div className="relative">
            <div
              className={cn(
                "flex items-center",
                direction === "right" ? "justify-end" : ""
              )}
            >
              <div
                className={cn(direction === "right" ? "text-right mr-5" : "")}
              >
                <div className="text-[30px] mb-3 font-medium leading-[1]">
                  {event?.title}
                </div>
                <div className="uppercase text-[15px]">{event?.titleEn}</div>
              </div>
              {/* icon */}
              <div className="w-[19.2px] h-[52.2px] box-border shadow-[0_0_19.2px_rgba(255,141,40,0.84),0_0_19.2px_rgba(255,141,40,0.84)] border-[4.8px] border-solid border-[#ffe6b7]">
                <div className="w-full h-full shadow-[0_0_9.6px_rgba(255,141,40,0.84)_inset,0_0_9.6px_rgba(255,141,40,0.84)_inset] m-0 p-0" />
              </div>
            </div>
          </div>
          {/* desribe */}
          <div className="flex justify-end">
            <div className="max-w-[510px] text-xs text-[white] tracking-[0.75px] leading-normal font-[lighter] mt-[32.4px] px-0 py-[8px] border-t-2 border-t-[#e5bc76] border-solid">
              <p>
                <span
                  className="relative text-[#ffe6b7]"
                  style={{
                    textShadow:
                      "0 5px 8px rgba(0, 0, 0, 0.38), 0 5px 8px rgba(0, 0, 0, 0.38)",
                  }}
                >
                  138亿年前*
                </span>
                ，一场温度极高、尺度极小的大爆炸启动了新一轮
                <span
                  className="relative text-[#ffe6b7]"
                  style={{
                    textShadow:
                      "0 5px 8px rgba(0, 0, 0, 0.38), 0 5px 8px rgba(0, 0, 0, 0.38)",
                  }}
                >
                  宇宙呼吸的进程*
                </span>
                。
                伴随着持续的膨胀，宇宙的温度和密度迅速下降，使宇宙得以完成原初核合成。在随后的漫长岁月中,
                原子和分子们逐渐复合成为各种气体和尘埃，在分裂、坍缩、聚拢中形成了古老星云的雏形，逐渐开始了对恒星的孕育。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
